import React, { useState } from 'react';
import '../../css/modal.css'
import axios from 'axios';

const AddProject = ({ user, closeProjectModal }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const postProject = () => {
        axios.post('http://127.0.0.1:8000/projects/', {
            name: name,
            description: description,
            author: user
        })
            .catch(err => console.error(err))
        window.location.replace('/projects');
    }

    return (
        <div className='modalBackgroud' >
            <div className='modalContainer'>
                <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h2 className="fw-bold mb-0">Create Project</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={() => closeProjectModal(false)}
                    ></button>
                </div>
                <div className="modal-body p-5 pt-0">
                    <form className="">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-3"
                                required
                                onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="floatingInput" >Name: </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-3"
                                required
                                onChange={(e) => setDescription(e.target.value)} />
                            <label htmlFor="floatingInput">Description: </label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                            onClick={postProject} >Create Project</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddProject;