// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
// Testnet-only example. NOT audited or deployed. No marketplace settlement logic.
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract BMverseCollectible is ERC721URIStorage, Ownable {
    uint256 public nextTokenId = 1;
    constructor(address initialOwner) ERC721("BMverse Collectible", "BMV") Ownable(initialOwner) {}
    function safeMint(address to, string calldata metadataURI) external onlyOwner returns (uint256 tokenId) {
        require(bytes(metadataURI).length != 0, "Empty metadata URI");
        tokenId = nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, metadataURI);
    }
}
