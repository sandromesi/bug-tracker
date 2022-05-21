import React, { useState, useEffect } from 'react';
import PutIssue from '../components/issues/PutIssue';
import DeleteIssue from '../components/issues/DeleteIssue';
import AddIssue from '../components/issues/AddIssue';

const IssuePage = ({ user }) => {

    const [openIssueModal, setOpenIssueModal] = useState(false)

    const [issues, setIssues] = useState([])
    const [oneIssue, setIssue] = useState([])
    const [PutIssueModal, setPutIssueModal] = useState(false)
    const [DeleteIssueModal, setDeleteIssueModal] = useState(false)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/issues')
            .then(res => res.json())
            .then(res => {
                setIssues(res)
            })
    }, [])

    return (
        <div className='conteiner-fluid'>
            <div className='row mb-4'>
                <div className='col-1'><h2>Issues:</h2></div>
                <div className='col-11'>
                    <button type="button" className="btn btn-primary"
                        onClick={() => { setOpenIssueModal(true) }}
                    >+ Create Issue</button>
                    {openIssueModal && <AddIssue user={user} closeIssueModal={setOpenIssueModal} />}
                </div>
            </div>
            <table className="table table-hover table-bordered border-primary">
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Title</th>
                        <th className='w-25 align-middle'>Description</th>
                        <th>Status</th>
                        <th>Project</th>
                        <th>Author</th>
                        <th>Comments</th>
                        <th>Creation Date</th>
                        <th>Due Date</th>
                        <th>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map((issue, index) => (
                        <tr key={index}>
                            <td className='align-middle'>{issue.title}</td>
                            <td className='align-middle'>{issue.description}</td>
                            <td className='align-middle'>{issue.status}</td>
                            <td className='align-middle'>{issue.project_id}</td>
                            <td className='align-middle'>{issue.author}</td>
                            <td className='align-middle'>{issue.comments}</td>
                            <td className='align-middle'>{issue.creation_date}</td>
                            <td className='align-middle'>{issue.due_date}</td>
                            <td className='align-middle'>
                                <button type="button" className="btn btn-outline-primary me-2"
                                    onClick={() => { setPutIssueModal(true); setIssue(issue) }}
                                >Edit</button>
                                {PutIssueModal && <PutIssue issue={oneIssue} closeIssueModal={setPutIssueModal} />}
                                <button type="button" className="btn btn-outline-danger me-2"
                                    onClick={() => { setDeleteIssueModal(true); setIssue(issue) }}
                                >Delete</button>
                                {DeleteIssueModal && <DeleteIssue issue={oneIssue} closeIssueModal={setDeleteIssueModal} />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IssuePage;