import React from 'react';
import axios from 'axios';

const DeleteProject = ({ project, closeProjectModal }) => {

    const deleteProject = () => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}projects/` + project.id + '/')
            .catch(err => console.error(err))
        window.location.replace('/projects');
    }

    return (
        <div className='modalBackgroud' >
            <div className='modalContainer' >
                <div className="modal-header p-5 pb-4 border-bottom-0 flex-row-reverse">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={() => closeProjectModal(false)}
                    ></button>
                </div>
                <div>
                    <h2 className="fw-bold mb-0 text-center">Are you sure you want to delete the project "
                        <span className='text-danger fw-bolder text-decoration-underline'>{project.name}</span>" ?</h2>
                </div>
                <div className='mt-5 d-flex justify-content-center'>
                    <button type="button" className="btn btn-danger me-2"
                        onClick={deleteProject} >Delete Project</button>
                    <button type="button" className="btn btn-primary me-2"
                        onClick={() => closeProjectModal(false)}>Cancel</button>
                </div>
            </div>
        </div >
    );
};

export default DeleteProject;