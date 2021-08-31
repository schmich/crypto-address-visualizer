function getAddressInfo() {
    let defaults = {
        address: null,
        host: null
    };

    if (!window.location.search) {
        return defaults;
    }

    let encodedPayload = window.location.search.substring(1);
    if (!encodedPayload) {
        return defaults;
    }

    let { text, url } = {
        text: '',
        url: null,
        ...JSON.parse(decodeURIComponent(atob(encodedPayload)))
    };

    let address = '';
    let matches = text.match(/[a-z0-9:]{20,255}/i);
    if (matches) {
        address = matches[0];
    } else {
        address = text.trim();
    }

    let host = null;
    try {
        host = (new URL(url)).host;
    } catch {
        // Fall back to null.
    }

    return {
        address,
        host
    };
}

function getBytes(str) {
    var bytes = [];
    for(var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        bytes.push(char >>> 8);
        bytes.push(char & 0xFF);
    }
    return bytes;
}

function fletcher16(buf) {
    var sum1 = 0xff, sum2 = 0xff;
    var i = 0;
    var len = buf.length;

    while (len) {
        var tlen = len > 20 ? 20 : len;
        len -= tlen;
        do {
            sum2 += sum1 += buf[i++];
        } while (--tlen);
        sum1 = (sum1 & 0xff) + (sum1 >> 8);
        sum2 = (sum2 & 0xff) + (sum2 >> 8);
    }
    sum1 = (sum1 & 0xff) + (sum1 >> 8);
    sum2 = (sum2 & 0xff) + (sum2 >> 8);
    return sum2 << 8 | sum1;
}

function padLeft(str, width, pad) {
    let prefix = '';
    for (let count = width - str.length; count > 0; count--) {
        prefix += pad;
    }

    return `${prefix}${str}`;
}

function updateVisualizers(content) {
    let bytes = getBytes(content);
    let checksum = padLeft(fletcher16(bytes).toString(16), 4, '0');
    let checksumEl = document.getElementById('checksum');
    checksumEl.innerText = `checksum:${checksum}`;

    let lengthEl = document.getElementById('length');
    lengthEl.innerText = `length:${content.length}`;

    let blockiesSeed = sha256(encodeURIComponent(`${content}:blockies`));
    let blockiesEl = document.getElementById('blockies');
    renderIcon({ seed: blockiesSeed, size: 30, scale: 5 }, blockiesEl);

    let jdenticonContent = sha256(encodeURIComponent(`${content}:jdenticon`));
    let jdenticonEl = document.getElementById('jdenticon');
    jdenticon.drawIcon(jdenticonEl.getContext('2d'), jdenticonContent, 150, { padding: 0 });

    let identiconHash = sha256(encodeURIComponent(`${content}:identicon`));
    let identiconEl = document.getElementById('identicon');
    let identiconData = new Identicon(identiconHash, { format: 'svg' }).toString();
    identiconEl.setAttribute('src', `data:image/svg+xml;base64,${identiconData}`);

    let qrcode = document.getElementById('qrcode');
    if (this.qr) {
        this.qr.clear();
        this.qr.makeCode(content);
    } else {
        this.qr = new QRCode(qrcode, {
            text: content,
            width: 150,
            height: 150
        });
    }
}

function autosizeWindow() {
    setTimeout(() => {
        let { width: bodyWidth, height: bodyHeight } = document.body.getBoundingClientRect();
        let { width: contentWidth, height: contentHeight } = document.getElementById('content').getBoundingClientRect();
        document.body.style.height = `${contentHeight}px`;
        document.body.style.width = `${contentWidth}px`;
        window.resizeBy(contentWidth - bodyWidth, contentHeight - bodyHeight);
    }, 10);
}

function loadNoAddress() {
    let noAddressEl = document.getElementById('no-address');
    noAddressEl.classList.add('enabled');

    let specifyAddressEl = document.getElementById('specify-address');
    specifyAddressEl.addEventListener('click', () => {
        let newAddress = prompt('Specify crypto address');
        if (!newAddress) {
            return;
        }

        window.location.search = btoa(encodeURIComponent(JSON.stringify({
            text: newAddress,
            url: null
        })));
    });
}

function loadWithAddress(address, host) {
    let withAddressEl = document.getElementById('with-address');
    withAddressEl.classList.add('enabled');

    let hostEl = document.getElementById('host');
    if (host) {
        document.title = `Crypto Address Visualizer: ${host}`;
        hostEl.title = host;
        hostEl.innerText = `host:${host}`;
        hostEl.style.display = 'block';
    } else {
        hostEl.style.display = 'none';
    }

    let addressEl = document.getElementById('address');
    const updateAddress = address => {
        addressEl.innerText = address;
        addressEl.title = `Edit address "${address}"`;
    };

    updateAddress(address);
    addressEl.addEventListener('click', () => {
        let newAddress = prompt('Edit crypto address', addressEl.innerText);
        if (!newAddress) {
            return;
        }

        updateAddress(newAddress.trim());
        updateVisualizers(addressEl.innerText);
    });

    updateVisualizers(address);
}

function load() {
    let { address, host } = getAddressInfo();

    if (!address) {
        loadNoAddress();
    } else {
        loadWithAddress(address, host);
    }

    autosizeWindow();
}

load();