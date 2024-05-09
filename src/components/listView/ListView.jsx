import React, { useState } from 'react'
import { CloseButton, Form, ListGroup } from 'react-bootstrap'
import NewTask from '../newTask/NewTask'
import { taskList } from '../data/Data'
import './ListView.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


const ListView = () => {
    const [list, setList] = useState(taskList)

    const handleSaveData = (enteredTaskData) => {
        const taskData = {
            ...enteredTaskData,
            id: Math.random().toString(),
        };
        setList((prev) => [...prev, taskData]);
    };

    const handleLiveStatus = (taskId) => {
        const updatedList = list.map((task) =>
            task.id === taskId ? { ...task, statusTask: !task.statusTask } : task
        );
        setList(updatedList);
    };

    const handleClose = (taskId) => {
        const updatedList = list.filter((task) => task.id !== taskId);
        setList(updatedList);
    };


    return (
        <>
            <h2 className='text-light'>Agregar o ver tareas: </h2>
            <ListGroup className='  list-Style'>
                {list.map((singleTask) => (
                    <ListGroup.Item key={singleTask.id} className='d-flex justify-content-between align-items-center divstyle '>
                        <p className='mt-2' style={{ textDecoration: singleTask.statusTask ? 'line-through' : 'none' }}>{singleTask.valueTask}</p>
                        <Form>
                            <Form.Check
                                type="switch"
                                id={`custom-switch-${singleTask.id}`}
                                label={singleTask.statusTask ? "Completado":"Pendiente"}
                                onChange={() => handleLiveStatus(singleTask.id)}
                                checked={singleTask.statusTask}
                            />
                        </Form>
                        <i className="bi bi-x-lg custom-close-button" onClick={() => handleClose(singleTask.id)}></i>
                    </ListGroup.Item>
                ))}
                <NewTask onTaskDataSaved={handleSaveData} />
            </ListGroup>

        </>

    )
}

export default ListView