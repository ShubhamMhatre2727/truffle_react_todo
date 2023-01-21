pragma solidity ^0.8.12;

contract Todo{
    
    struct Task{
        uint taskId;
        string task;
        bool isDeleted;
    }

    Task[] tasks;
    mapping(uint => address) OwnersList;

    function getTasks() public view returns(Task[] memory){
        Task[] memory temporary = new Task[](tasks.length);
        uint counter = 0;

        for(uint i=0; i<tasks.length; i++) {
            if(OwnersList[i] == msg.sender && tasks[i].isDeleted == false) {
                temporary[counter] = tasks[i];
                counter++;
            }
        }

        Task[] memory result = new Task[](counter);
        for (uint i=0; i<counter; i++){
            result[i] = temporary[i];
        }
        return result;
    }

    function addTask(string memory _content) public{
        uint taskId = tasks.length;
        tasks.push(Task(taskId, _content, false));

        // 
        OwnersList[taskId] = msg.sender;
    }

    function deleteTask(uint taskId) public{
        tasks[taskId].isDeleted = true;
    }

    constructor(){
        // addTask('Task ........1');
        // addTask('Task ........2');
    }
}