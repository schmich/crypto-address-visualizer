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

function padLeft(str, width, pad) {
    let prefix = '';
    for (let count = width - str.length; count > 0; count--) {
        prefix += pad;
    }

    return `${prefix}${str}`;
}

function makeDigit(hexDigit) {
    let square = document.createElement('div');
    square.classList.add('digit');
    square.classList.add(`digit-${hexDigit}`);
    square.innerText = hexDigit;
    return square;
}

function updateVisualizers(content) {
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

    // Remove existing checksum digits.
    for (let digitEl of document.querySelectorAll('.digit')) {
        digitEl.parentElement.removeChild(digitEl);
    }

    let bytes = new TextEncoder().encode(content);
    let checksum = padLeft(crc32(bytes).toString(16), 8, '0');
    let checksumEl = document.getElementById('checksum');
    for (let digit of checksum) {
        let square = makeDigit(digit);
        checksumEl.appendChild(square);
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

    window.addEventListener('keydown', ({ code }) => {
        if (code == 'Escape') {
            window.close();
        }
    });

    autosizeWindow();
}

load();