import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from './Button'
import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    return ( 
        <>
            <div className='back-button-container'>
                <Button>Voltar</Button>
            </div>
            <div className='task-details-container'> 
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum, dolot sit amet consectetur aeteudfm
                    eienfd adfsedaedfa~iidfsd pjfkne\iaef ksdfna~ief
                </p>
            </div>
        </> 
    );
}
 
export default TaskDetails;