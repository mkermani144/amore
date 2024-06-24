// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./TheMessage.sol";

contract LoveFactory {
    event ContractDeployed(address addr);

    function deploy(
        string memory message,
        uint timeSpent,
        bytes32 salt
    ) public returns (address) {
        address addr = address(new TheMessage{salt: salt}(message, timeSpent));
        emit ContractDeployed(addr);
        return addr;
    }
}
