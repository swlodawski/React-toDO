import { useState } from 'react';
import './toDOList.css';

function ToDOList () {
    const [ tasks, setTasks] = useState({
        id: 1,
        text: 'Lab Experiements',
        completed: false
    },
    { 
        id: 2,
        text: 'Getting freaky with CeeLo Green',
        completed: true
});

const [text, setText ] = useState('');
function addTasks(text) {
    const newTask = {
        id: Date.now(),
        text,
        completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
}
function deleteTask (id) {
    setTasks(tasks.filter(task => task.id !== id));
}

function toggleCompleted(id) {
setTasks(tasks.map((task => {
    if (task.id === id) {
        return{...task, completed: !tast.completed}
    }else {
        return task;
    }
})))
}
    return(
    <div className='todo-list'>
        {tasks.map(task => (
            <ToDOItem 
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}/>
        ))}
        <input value={text}
        onChange={e => setText(e.target.value)}/>
        <button onClick={() => addTasks(text)}>Add</button>
    </div> 
    );
}

export default ToDOList;