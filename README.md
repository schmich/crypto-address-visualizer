# Crypto Address Visualizer

Crypto Address Visualizer is a browser extension that gives you extra confidence when copy-pasting crypto wallet addresses between online crypto services by enabling you to compare addresses visually with multiple images.

**Supported browsers:**

<img src="assets/chrome.png" width="14" height="14"> Chrome: *Support coming soon*  \
<img src="assets/edge.png" width="14" height="14"> Edge: *Support coming soon*  \
<img src="assets/brave.png" width="14" height="14"> Brave: *Support coming soon*  \
<img src="assets/vivaldi.png" width="14" height="14"> Vivaldi: *Support coming soon*  \
<img src="assets/opera.png" width="14" height="14"> Opera: *Support coming soon*  \
<img src="assets/firefox.png" width="14" height="14"> Firefox: *Support coming when Firefox supports [Manifest v3](https://blog.mozilla.org/addons/2021/05/27/manifest-v3-update/)*

## Overview

...

## Visualizations

...

## Privacy & Security

The following steps have been taken to maximize privacy and security when using this extension:

1. **This extension is fully open source**

    The full source code for this extension is available in the [crypto-address-visualizer repository](https://github.com/schmich/crypto-address-visualizer/tree/master/src).

2. **This extension has no tracking, analytics, or cookies**

    This extension has no ads, no tracking, no analytics, and no cookies.

3. **This extension cannot make external requests**

    Due to a very strict [content security policy](https://developers.google.com/web/fundamentals/security/csp), this extension *cannot* make external requests, so it cannot send information to or receive information from any external service. See `content_security_policy` in [manifest.json](src/manifest.json).

4. **This extension does not import any external assets**

    JS, CSS

5. **This extension has no library references or dependencies**

    All required source has been copied.

6. **All loaded assets have subresource integrity checksums**

    SRI, link to visualizer.html

7. **This extension runs fully offline**

    This extension is [offline enabled](https://developer.chrome.com/docs/apps/manifest/offline_enabled/) and does not need internet connectivity to function. See `offline_enabled` in [manifest.json](src/manifest.json).

8. **This extension only requires one single permission**

    Browser extensions must [declare all permissions](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/) necessary to function. This extension only requires the [contextMenus permission](https://developer.chrome.com/docs/extensions/reference/contextMenus/), meaning its scope and capabilities are extremely limited. See `permissions` in [manifest.json](src/manifest.json).

9. **This extension cannot read or edit content on any page**

    Related to the previous point, due to permissions limitations, this extension cannot read or edit content on any page you visit. It has no access to your user profile or any of your personal data, public or private. It *only* has access to the text you select and provide to it through the context menu.

10. **This extension does not store any data**

    This extension does not use local storage or any extension storage of any kind.

## Donate

This extension is free forever. Donations are appreciated.

<details>
    <summary>
        <img src="assets/btc-logo.png" width="16" height="16"> Bitcoin: 3AMquLosfN95B7znVX4JSMTwrbps7FegKc
    </summary>
    <img src="assets/btc-qr.png">
</details>

<details>
    <summary>
        <img src="assets/eth-logo.png" width="16" height="16"> Ethereum: 0xDb3D8798Ac8D0Db0BF16ACd6F536fC9634253b9C
    </summary>
    <img src="assets/eth-qr.png">
</details>

<details>
    <summary>
        <img src="assets/bch-logo.png" width="16" height="16"> Bitcoin Cash: 14QnKWFsuZwbDAc6LgSF8kjThYLwuHRJ2C
    </summary>
    <img src="assets/bch-qr.png">
</details>

<details>
    <summary>
        <img src="assets/ltc-logo.png" width="16" height="16"> Litecoin: MUnX5iwLDsgfh9YmJAZp3MJ8MfMiGKb7aB
    </summary>
    <img src="assets/ltc-qr.png">
</details>

<details>
    <summary>
        <img src="assets/ada-logo.png" width="16" height="16"> Cardano: addr1v8wa2e0u53g5j3ay0zjuq6pysmdj2gtyjzhqtadduv87q5gss9nxg
    </summary>
    <img src="assets/ada-qr.png">
</details>

<details>
    <summary>
        <img src="assets/usdc-logo.png" width="16" height="16"> USD Coin: 0x43f039Ec812a3f6b9e649853244637F1CBF85Ffa
    </summary>
    <img src="assets/usdc-qr.png">
</details>

<details>
    <summary>
        <img src="assets/doge-logo.png" width="16" height="16"> Dogecoin: DP9rhCR4E8qQrfadfRtuc9vTimUrZBb2Zr
    </summary>
    <img src="assets/doge-qr.png">
</details>

<details>
    <summary>
        <img src="assets/dot-logo.png" width="16" height="16"> Polkadot: 15yNgRV9quNLqfdGcX3y3yb2zXebiW4Dpjb6MaWgCQgW2A32
    </summary>
    <img src="assets/dot-qr.png">
</details>

<details>
    <summary>
        <img src="assets/sol-logo.png" width="16" height="16"> Solana: G3MgYuKqcXwHkC5iFFfujxihqqXEoeA4H3r3YFyUBZWq
    </summary>
    <img src="assets/sol-qr.png">
</details>

## License

Copyright &copy; 2021 Chris Schmich  \
MIT License. See [LICENSE](LICENSE) for details.