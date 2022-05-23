import React, { useState, useEffect } from 'react';
import PutProject from '../components/projects/PutProject';
import DeleteProject from '../components/projects/DeleteProject';
import AddProject from '../components/projects/AddProject';

const ProjectPage = ({ user }) => {

    const [openProjectModal, setOpenProjectModal] = useState(false)

    const [projects, setProjects] = useState([])
    const [oneProject, setProject] = useState([])
    const [PutProjectModal, setPutProjectModal] = useState(false)
    const [DeleteProjectModal, setDeleteProjectModal] = useState(false)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}projects`)
            .then(res => res.json())
            .then(res => {
                setProjects(res)
            })
    }, [])

    return (
        <div className='conteiner-fluid'>
            <div className='row mb-4'>
                <div className='col-1'><h2>Projects:</h2></div>
                <div className='col-11'>
                    <button type="button" className="btn btn-primary"
                        onClick={() => { setOpenProjectModal(true) }}
                    >+ Create Project</button>
                    {openProjectModal && <AddProject user={user} closeProjectModal={setOpenProjectModal} />}
                </div>
            </div>
            <table className="table table-hover table-bordered border-primary">
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Slug</th>
                        <th>Name</th>
                        <th className='w-25 align-middle'>Description</th>
                        <th>Author</th>
                        <th>Creation Date</th>
                        <th>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={index}>
                            <td className='align-middle'>{project.slug}</td>
                            <td className='align-middle'>{project.name}</td>
                            <td className='align-middle'>{project.description}</td>
                            <td className='align-middle'>{project.author}</td>
                            <td className='align-middle'>{project.creation_date}</td>
                            <td className='align-middle'>
                                <button type="button" className="btn btn-outline-primary me-2"
                                    onClick={() => { setPutProjectModal(true); setProject(project) }}
                                >Edit</button>
                                {PutProjectModal && <PutProject project={oneProject} closeProjectModal={setPutProjectModal} />}
                                <button type="button" className="btn btn-outline-danger me-2"
                                    onClick={() => { setDeleteProjectModal(true); setProject(project) }}
                                >Delete</button>
                                {DeleteProjectModal && <DeleteProject project={oneProject} closeProjectModal={setDeleteProjectModal} />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectPage;