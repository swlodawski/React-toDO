import { useState } from 'react';
import './toDO.css';

function ToDO () {
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
    <>   
        <div>Just Testing</div>
        <div className='todo-item'>THIS IS JUST A TEST OF ITEM CSS 
            <p>This is the right way</p>
        </div>
    </>  
    );
}

export default ToDO;