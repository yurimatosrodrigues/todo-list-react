import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleTaskClick }) => {
    console.log(tasks);
    return(
        <>
            {tasks.map(
                (task) => (
                    <Task task={task} handleTaskClick={handleTaskClick}/>
                )
            )}
        </>
    );
};
export default Tasks;