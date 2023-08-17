//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyErc20 is ERC20 {
    constructor() ERC20("MyERC20", "merc") {
        _mint(msg.sender, 100000000 * 10**18);
    }
}
