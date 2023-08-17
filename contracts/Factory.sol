//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./MyErc20.sol";

contract Factory {
    mapping(string => address) public deployedTokens;

    constructor(){

    }

    function createToken(string memory name, string memory symbol) public {
        MyErc20 newToken = new MyErc20(name, symbol);
        deployedTokens[name] = address(newToken);
    }
}