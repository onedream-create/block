//SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "hardhat/console.sol";

contract Greeter {
    address private _owner;

    string private _greeting;
    bool private _callSetGreeting;
    string[] private _greetingHistory;

    mapping(address => uint256) public balances;

    event SetGreeting(address sender, string oldGreeting, string newGreeting);

    //memory는 특정 scope를 벗어나면 사라지는 데이터
    constructor(string memory greeting_) {
        console.log("Deploying a Greeter with greeting:", greeting_);

        _setGreetingPrivate(msg.sender, greeting_);
        _owner = msg.sender;
    }
    // $Ether을 전송하는 코드를 실행하는 함수는 payable 키워드
    function setGreetingPayable(string memory greeting_) public payable {
        // 필요한 조건을 체크하고 충족하지 않을 시 transaction을 revert
        require(msg.value == 0.1 ether, "msg.value is not 0.1 ether");

        balances[msg.sender] += msg.value;

        _setGreetingPrivate(msg.sender, greeting_);
    }

    //_owner만 호출이 가능한 함수
    function withdraw(address to) public payable {
        require(_owner == msg.sender, "only owner");

        //형변환
        address thisAddress = address(this);
        console.log("contract balance: %d", thisAddress.balance);
        bool result = payable(to).send(thisAddress.balance);
        require(result, "Failed to send Ether");
    }

    function setGreeting(string memory greeting_) public {
        _setGreetingPrivate(msg.sender, greeting_);
    }

    function getGreet() public view returns (string memory) {
        return _greeting;
    }

    function getGreetingHistoryCount() public view returns (uint256) {
        return _greetingHistory.length;
    }

    function getGreetingHistoryAll() public view returns (string[] memory) {
        return _greetingHistory;
    }

    function getGreetingHistoryOne(uint256 index) public view returns (string memory) {
        return _greetingHistory[index];
    }

    function _setGreetingPrivate(address sender, string memory greeting_) private {
        console.log("Changing greeting from '%s' to '%s'", _greeting, greeting_);

        if (_callSetGreeting == false) {
            _callSetGreeting = true;
        }
        //storage는 영구적으로 저장되는 데이터
        string[] storage greetingHistory = _getGreetingHistory();
        greetingHistory.push(_greeting);

        emit SetGreeting(sender, _greeting, greeting_);

        _greeting = greeting_;
    }

    function _getGreetingHistory() private view returns (string[] storage) {
        return _greetingHistory;
    }
}
