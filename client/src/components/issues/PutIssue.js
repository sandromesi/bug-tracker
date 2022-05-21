import React, { useState } from 'react';
import axios from 'axios';

const PutIssue = ({ issue, closeIssueModal }) => {

    const [title, setTitle] = useState(issue.title);
    const [description, setDescription] = useState(issue.description);
    const [status, setStatus] = useState(issue.status);
    const [dueDate, setDueDate] = useState(issue.due_date);

    const editIssue = () => {
        axios.put('http://127.0.0.1:8000/issues/' + issue.id + '/', {
            title: title,
            description: description,
            status: status,
            due_date: dueDate
        })
            .catch(err => console.error(err))
        window.location.replace('/');
    }

    return (
        <div className='modalBackgroud' >
            <div className='modalContainer' >
                <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h2 className="fw-bold mb-0">Edit Issue</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={() => closeIssueModal(false)}
                    ></button>
                </div>
                <div className="modal-body p-5 pt-0">
                    <form className="">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-3"
                                value={title}
                                required
                                onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="floatingInput" >Title: </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-3" value={description}
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
                            <input type="date" className="form-control rounded-3"
                                value={dueDate}
                                required
                                onChange={(e) => setDueDate(e.target.value)} />
                            <label htmlFor="floatingInput" className="form-label">Due Date: </label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                            onClick={editIssue} >Edit Issue</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PutIssue;