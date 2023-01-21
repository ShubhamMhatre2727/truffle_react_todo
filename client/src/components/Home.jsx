import { useState, useEffect} from "react";
import { useEth } from "../contexts/EthContext";
import AddTask from "./AddTask";
import { Tasks } from "./Tasks";

const Home = ()=>{
    const {state: {contract, accounts, artifact}} = useEth();
    const [tasks, setTasks] = useState([])
    
    // reloads page whenever user switches account
    window.ethereum.on('accountsChanged', async()=>{
      document.location.reload()   
    })
    
    return (
        <>
        {
        !artifact ? <>NoticeNoArtifact</> :
          !contract ? <>NoticeWrongNetwork</> :
            <>
            <AddTask setTasks={setTasks} contract={contract} accounts={accounts}/>
            <Tasks tasks={tasks} setTasks={setTasks} contract={contract} accounts={accounts}/>
            </>
      }
        </>
    )
}

export default Home;