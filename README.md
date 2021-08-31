# Crypto Address Visualizer

Crypto Address Visualizer is a browser extension that gives you extra confidence when copy-pasting crypto wallet addresses between online crypto services by enabling you to compare addresses visually with multiple images.

## Installation

Install the extension for your browser:

<img src="assets/chrome.png" width="14" height="14"> Chrome: [Install extension](https://chrome.google.com/webstore/detail/crypto-address-visualizer/fbobbccllnpjhnmhaekkggngkomifhhp/)  \
<img src="assets/edge.png" width="14" height="14"> Edge: *Support coming soon*  \
<img src="assets/brave.png" width="14" height="14"> Brave: *Support coming soon*  \
<img src="assets/vivaldi.png" width="14" height="14"> Vivaldi: *Support coming soon*  \
<img src="assets/opera.png" width="14" height="14"> Opera: *Support coming soon*  \
<img src="assets/firefox.png" width="14" height="14"> Firefox: *Support coming when Firefox supports [Manifest v3](https://blog.mozilla.org/addons/2021/05/27/manifest-v3-update/)*

## Quick Start

**Select your crypto wallet address text on any website**

<img src="assets/screenshot-address.png">

**Right-click and select _Crypto Address Visualizer_**

<img src="assets/screenshot-context-menu.png">

**Repeat across websites and compare images and checksums to ensure addresses are the same**

<img src="assets/screenshot-visualizer.png">

## Privacy & Security

The following steps have been taken to maximize privacy and security when using this extension:

1. **This extension is fully open source**

    The full source code for this extension is available in the [crypto-address-visualizer repository](https://github.com/schmich/crypto-address-visualizer/tree/master/src).

1. **This extension _cannot_ make external requests**

    Due to a very strict [content security policy](https://developers.google.com/web/fundamentals/security/csp), this extension *cannot* make external requests, so it cannot send information to or receive information from any external service. See `content_security_policy` in [manifest.json](src/manifest.json).

1. **This extension only requires one single permission**

    Browser extensions must [declare all permissions](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/) necessary to function. This extension only requires the [contextMenus permission](https://developer.chrome.com/docs/extensions/reference/contextMenus/), meaning its scope and capabilities are extremely limited. See `permissions` in [manifest.json](src/manifest.json).

1. **This extension _cannot_ read or edit content on any page**

    Related to the previous point, due to permissions limitations, this extension cannot read or edit content on any page you visit. It has no access to your user profile or any of your personal data, public or private. It has no access to your clipboard.

    It *only* has access to the text you select and provide to it through the context menu.

1. **This extension has zero tracking, zero analytics, and zero cookies**

    No Google Analytics. No social media tracking. No marketing pixels. Nothing.

1. **This extension runs fully offline**

    This extension is [offline enabled](https://developer.chrome.com/docs/apps/manifest/offline_enabled/) and does not need internet connectivity to function. See `offline_enabled` in [manifest.json](src/manifest.json).

1. **This extension does not store any data**

    This extension does not use local storage or extension storage of any kind. Nothing is saved to or loaded from disk. This extension operates entirely in memory.

1. **This extension does not import any external assets**

    All assets (HTML, CSS, JavaScript, images) are packaged and included with the extension at the time of publishing. No external assets are requested or included at runtime.

1. **All loaded assets have subresource integrity checksums**

    All assets loaded in the visualizer are protected with [subresource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to ensure they were not manipulated or tampered with between development, packaging, distribution, installation, and runtime. See [visualizer.html](src/visualizer.html) for details.

## Donate

Crypto Address Visualizer is free forever. Donations are appreciated.

<details>
    <summary>
        <img src="assets/btc-logo.png" width="16" height="16"> Bitcoin
    </summary>
    <br>3AMquLosfN95B7znVX4JSMTwrbps7FegKc
    <br><img src="assets/btc-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/eth-logo.png" width="16" height="16"> Ethereum
    </summary>
    <br>0xDb3D8798Ac8D0Db0BF16ACd6F536fC9634253b9C
    <br><img src="assets/eth-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/usdc-logo.png" width="16" height="16"> USD Coin
    </summary>
    <br>0x43f039Ec812a3f6b9e649853244637F1CBF85Ffa
    <br><img src="assets/usdc-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/ltc-logo.png" width="16" height="16"> Litecoin
    </summary>
    <br>MUnX5iwLDsgfh9YmJAZp3MJ8MfMiGKb7aB
    <br><img src="assets/ltc-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/ada-logo.png" width="16" height="16"> Cardano
    </summary>
    <br>addr1v8wa2e0u53g5j3ay0zjuq6pysmdj2gtyjzhqtadduv87q5gss9nxg
    <br><img src="assets/ada-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/bch-logo.png" width="16" height="16"> Bitcoin Cash
    </summary>
    <br>14QnKWFsuZwbDAc6LgSF8kjThYLwuHRJ2C
    <br><img src="assets/bch-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/doge-logo.png" width="16" height="16"> Dogecoin
    </summary>
    <br>DP9rhCR4E8qQrfadfRtuc9vTimUrZBb2Zr
    <br><img src="assets/doge-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/dot-logo.png" width="16" height="16"> Polkadot
    </summary>
    <br>15yNgRV9quNLqfdGcX3y3yb2zXebiW4Dpjb6MaWgCQgW2A32
    <br><img src="assets/dot-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/sol-logo.png" width="16" height="16"> Solana
    </summary>
    <br>G3MgYuKqcXwHkC5iFFfujxihqqXEoeA4H3r3YFyUBZWq
    <br><img src="assets/sol-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/algo-logo.png" width="16" height="16"> Algorand
    </summary>
    <br>YTJYE4ZBUWWGO7JQOSO44JZJV7QZJFLEFWDXDWV3AAF3NW3Z44GSPXKPWQ
    <br><img src="assets/algo-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/xtz-logo.png" width="16" height="16"> Tezos
    </summary>
    <br>tz1Sc1j1wnT6fmLDiBCdCZ4D4y7MrZFQogGa
    <br><img src="assets/xtz-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/mkr-logo.png" width="16" height="16"> Maker
    </summary>
    <br>0x09e1FF58c527041d73535617b989C27a3787E992
    <br><img src="assets/mkr-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/aave-logo.png" width="16" height="16"> Aave
    </summary>
    <br>0x01BAF46136d52Ce62dc02B84A740d32C8D5251B8
    <br><img src="assets/aave-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/matic-logo.png" width="16" height="16"> Polygon
    </summary>
    <br>0xB3F205611acE0a660bCe412C38E58a910BED0e01
    <br><img src="assets/matic-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/dai-logo.png" width="16" height="16"> Dai
    </summary>
    <br>0xaE396fc1Ccc3CA7b64F1639826a6988Cc55F797e
    <br><img src="assets/dai-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/trx-logo.png" width="16" height="16"> TRON
    </summary>
    <br>TWJmsiCRizDMBWdV1oWr3QwKbXRW6cb66q
    <br><img src="assets/trx-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/paxg-logo.png" width="16" height="16"> PAX Gold
    </summary>
    <br>0x29F8fBE57aF96EDffd066860458601eaB1a82Ff5
    <br><img src="assets/paxg-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/sushi-logo.png" width="16" height="16"> SushiSwap
    </summary>
    <br>0xBfAaad6B5CDdD575e6B9ACB492De3580ac837DDc
    <br><img src="assets/sushi-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/uni-logo.png" width="16" height="16"> Uniswap
    </summary>
    <br>0x7e48aaC89e8b5367BA66F21A6776bF35cEA19C84
    <br><img src="assets/uni-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/comp-logo.png" width="16" height="16"> Compound
    </summary>
    <br>0xddEB2A399fD0bB74E405dc1943E204c3c4003B68
    <br><img src="assets/comp-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/bat-logo.png" width="16" height="16"> Basic Attention Token
    </summary>
    <br>0x9C0dE3f9bFBf2a65Bf83DCcc0FE3780fFdba2807
    <br><img src="assets/bat-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/grt-logo.png" width="16" height="16"> The Graph
    </summary>
    <br>0x0792bFD809d5cc7828C99703376d882E7Edcb6eB
    <br><img src="assets/grt-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/link-logo.png" width="16" height="16"> Chainlink
    </summary>
    <br>0xDb31EF2C481CBbBd38c0404152e3199C6fD287A7
    <br><img src="assets/link-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/nu-logo.png" width="16" height="16"> NuCypher
    </summary>
    <br>0x97c43c0226006073788e1E769B6685FD20D77bf8
    <br><img src="assets/nu-qr.png"><br>
</details>

<details>
    <summary>
        <img src="assets/usdt-logo.png" width="16" height="16"> Tether
    </summary>
    <br>0xfaf5656af896C6c43C2f1689A15843ca2b07DEA7
    <br><img src="assets/usdt-qr.png"><br>
</details>

## License

Copyright &copy; 2021 Chris Schmich  \
MIT License. See [LICENSE](LICENSE) for details.