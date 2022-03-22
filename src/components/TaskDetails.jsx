import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from './Button'
import { useHistory } from 'react-router-dom';

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className='task-details-container'> 
                <h2>{params.taskTitle}</h2>
                <p>
                    {params.TaskDetails}
                </p>
            </div>
        </> 
    );
}
 
export default TaskDetails;