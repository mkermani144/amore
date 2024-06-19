// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract TheMessage {
    string message;
    uint timeSpent;

    constructor(string memory _message, uint _timeSpent) {
        message = _message;
        timeSpent = _timeSpent;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function getTimeSpent() public view returns (uint) {
        return timeSpent;
    }
}
