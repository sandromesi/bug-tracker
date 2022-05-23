import React, { useState } from 'react';
import axios from 'axios';

const PutProject = ({ project, closeProjectModal }) => {

    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);

    const editProject = () => {
        axios.put(`${process.env.REACT_APP_BASE_URL}projects/` + project.id + '/', {
            name: name,
            description: description
        })
            .catch(err => console.error(err))
        window.location.replace('/projects');
    }

    return (
        <div className='modalBackgroud' >
            <div className='modalContainer' >
                <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h2 className="fw-bold mb-0">Edit Issue</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={() => closeProjectModal(false)}
                    ></button>
                </div>
                <div className="modal-body p-5 pt-0">
                    <form className="">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-3"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="floatingInput" >Name: </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-3"
                                value={description}
                                required
                                onChange={(e) => setDescription(e.target.value)} />
                            <label htmlFor="floatingInput" >Description: </label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                            onClick={editProject} >Edit Project</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PutProject;