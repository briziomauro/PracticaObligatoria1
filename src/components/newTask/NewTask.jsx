import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import './NewTask.css'

const NewTask = ({ onTaskDataSaved }) => {
    const [task, setTask] = useState("");
    const [taskStatus, setTaskStatus] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleForm = () => {
        setShowForm(!showForm)
    }

    const handleTask = (e) => {
        setTask(e.target.value);
    }

    const handleTaskStatus = (e) => {
        setTaskStatus(e.target.checked);
        console.log(taskStatus)
    }

    const submitNewTask = (event) => {
        event.preventDefault();
        const taskCreated = {
            valueTask: task,
            statusTask: taskStatus,
        };

        onTaskDataSaved(taskCreated);
        setTask("");
        setTaskStatus(false);
        setShowForm(!showForm)
    }


    return (
        <div className='container'>
            <Button onClick={handleForm} variant="light"  className='m-2 d-inline button-style'>
                {showForm ? "-" : "+"}
            </Button>
            {showForm && (
                <Form onSubmit={submitNewTask}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="m-2" controlId="taskValue">
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar tarea"
                                    onChange={handleTask}
                                    value={task}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mt-3" controlId="taskStatus">
                                <Form.Check
                                    className='text-dark'
                                    type="switch"
                                    id="custom-switch"
                                    label={taskStatus ? "Completado" : "Pendiente"}
                                    onChange={handleTaskStatus}
                                    checked={taskStatus}
                                />
                            </Form.Group>
                        </Col>
                        <Button type='submit' className='mt-3 button-style' variant="dark" disabled={task === ""}>Agregar tarea</Button>
                    </Row>
                </Form>
            )}
        </div>

    )
}

export default NewTask