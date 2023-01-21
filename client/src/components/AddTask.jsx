import React from 'react'
import { useState } from 'react'

const AddTask = ({contract, accounts, setTasks}) => {
    const [inp, setInp] = useState('')

    async function addInputTask(){
        if(inp===''){
            console.log('nahi hoa');
        }
        else{
            await contract.methods.addTask(inp).send({from: accounts[0]});
            const tasks = await contract.methods.getTasks().call({from: accounts[0]});
            setTasks([...tasks]);
            setInp('')
        }
    }

  return (
    <div>
        <input type="text" value={inp} onChange={e =>setInp(e.target.value)}/>
        <button onClick={addInputTask}>+</button>
    </div>
  )
}

export default AddTask