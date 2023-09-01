import {React, useState } from "react";
import './ToDo.css';
import {SectionWrapper , SecondaryButton} from '../../Components/index';

const ToDo = () => {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function addTask(){
        if(!newTask){
            alert("Add A New Task");
            return;
        }

        const task = {
            id: Math.floor(Math.random()*1000),
            value: newTask
        };

        setTasks(oldList=> [...oldList, task]);
        setNewTask('');

    }

    const deleteItem = (id)=> {
        const newArray = tasks.filter(item => item.id !== id);
        setTasks(newArray);
    }
    return ( 
        <SectionWrapper>
            <h3 className='wrapper-quote'>Greatness is alot if small things done well "day after day, workout after workout, obedience after obedience,<br/> day after day".</h3>
            <div className='add-task-wrapper'>
                <input 
                type='text'
                placeholder='Add A New Task' 
                className='add-task' 
                value={newTask} 
                onChange={e=> setNewTask(e.target.value)}
                ></input>
                <SecondaryButton className='add-btn' handleClick={addTask}>Add Task!</SecondaryButton>
            </div>
            <ul className='added-tasks-wrapper'>
                {tasks.map(item => (
                    <li key={item.id}><button className="list-btn" onClick={()=> deleteItem(item.id)}>❌</button>{item.value}</li>
                ))}
            </ul>
        </SectionWrapper>
     );
}
 
export default ToDo;