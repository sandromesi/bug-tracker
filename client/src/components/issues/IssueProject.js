import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AddIssue from './AddIssue';

const IssueProject = ({ user }) => {

    const [projects, setProjects] = useState([]);
    const [oneProject, setOneProject] = useState('');

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}projects`)
            .then(resProjects => resProjects.json())
            .then(resProjects => {
                for (let i = 0; i < resProjects.length; i++) {
                    fetch(`${process.env.REACT_APP_BASE_URL}projects/${resProjects[i].id}/issues`)
                        .then(resIssues => resIssues.json())
                        .then(resIssues => {
                            resProjects[i].issues = parseInt(resIssues.length)
                            setProjects([...resProjects])
                        })
                }
            })
    }, [])

    const findProject = function (myProjects, name) {
        const nameReturned = myProjects.find(function (project, index) {
            return project.name.toLowerCase() === name.toLowerCase()
        })
        return nameReturned
    }

    return (
        <div>
            <div className="modal" tabIndex="-1">
                <div className="modal-dialog">
                </div>
            </div>

            <div className="modal-body">
                <div className="form-floating mb-3">
                    <select type="text" className="form-select" aria-label="Default select example"
                        required
                        onChange={(e) => setOneProject(findProject(projects, e.target.value))}>
                        <option ></option>
                        {projects.map((project, index) => (
                            <option key={index} value={project.name} >{project.name}</option>
                        ))}
                    </select>
                </div>
            </div>
{/* -------------------------------------- Modal Footer */}
            <div className="modal-footer">
                <button type="button" className="btn btn-primary"
                    onClick={() => setModalIsOpen(true)}>Next</button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <AddIssue user={user} project={oneProject} />
                </Modal>
            </div>







            {/* <div className="form-floating mb-3">
                <select type="text" className="form-select" aria-label="Default select example"
                    required
                    onChange={(e) => setOneProject(findProject(projects, e.target.value))}>

                    <option ></option>
                    {projects.map((project, index) => (
                        <option key={index} value={project.name} >{project.name}</option>
                    ))}
                </select>
                <label htmlFor="floatingInput" >Project: </label>
            </div>
            <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                onClick={() => setModalIsOpen(true)} >Next</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <AddIssue user={user} project={oneProject} />
            </Modal> */}
        </div>
    );
};

export default IssueProject;