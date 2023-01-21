import { useEffect } from "react";

export const Tasks = ({tasks, setTasks, contract, accounts}) => {
  async function loadData(){
    const data = await contract.methods.getTasks().call({from: accounts[0]});
    setTasks(data);
  }

  async function deleteTask(taskId){
    // console.log(taskId);
    await contract.methods.deleteTask(taskId).send({from: accounts[0]});
    loadData();
  }

  useEffect(() => {
    loadData();
  }, [])
  
  
  return (
    <div className="Tasks">
        {
          tasks.map(data => (
            <ul key={data.taskId}>
              {data.task}
              <button onClick={()=> deleteTask(data.taskId)}>delete</button>
            </ul>
          ))
        }
    </div>
  )
}
