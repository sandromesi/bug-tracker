import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddIssue = ({ user, closeIssueModal }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [projects, setProjects] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}projects`)
            .then(res => res.json())
            .then(res => {
                setProjects(res)
            })
    }, [])

    const postIssue = () => {
        axios.post(`${process.env.REACT_APP_BASE_URL}issues/`, {
            title: title,
            description: description,
            status: status,
            project_id: projectName,
            author: user,
            due_date: dueDate
        })
            .catch(err => console.error(err))
        window.location.replace('/');
    }



    return (
        <div className='modalBackgroud' >
            <div className='modalContainer' >
                <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h2 className="fw-bold mb-0">Create Issue</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={() => closeIssueModal(false)}
                    ></button>
                </div>
                <div className="modal-body p-5 pt-0">
                    <form class="">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-3"
                                required
                                onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="floatingInput" >Title: </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-3"
                                required
                                onChange={(e) => setDescription(e.target.value)} />
                            <label htmlFor="floatingInput" >Description: </label>
                        </div>
                        <div className="form-floating mb-3">
                            <select className="form-select" aria-label="Default select example"
                                type="text"
                                required
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}>
                                <option>{status}</option>
                                <option value='To Do' >To Do</option>
                                <option value='Work In Progress' >Work In Progress</option>
                                <option value='Blocked' >Blocked</option>
                                <option value='Closed' >Closed</option>
                            </select>
                            <label htmlFor="floatingInput" >Status: </label>
                        </div>
                        <div className="form-floating mb-3">
                            <select type="text" className="form-select" aria-label="Default select example"
                                required
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}>
                                <option value={projectName}>{projectName}</option>
                                {projects.map((project, index) => (
                                    <option key={index} value={project.id} >{project.name}</option>
                                ))}
                            </select>
                            <label htmlFor="floatingInput" >Project: </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="date" className="form-control rounded-3"
                                value={dueDate}
                                required
                                onChange={(e) => setDueDate(e.target.value)} />
                            <label htmlFor="floatingInput" className="form-label">Due Date: </label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                            onClick={postIssue} >Create Issue</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddIssue;