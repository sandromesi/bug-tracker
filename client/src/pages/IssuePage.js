import React, { useState, useEffect } from 'react';
import PutIssue from '../components/issues/PutIssue';
import DeleteIssue from '../components/issues/DeleteIssue';
import AddIssue from '../components/issues/AddIssue';
import AddComment from '../components/comments/AddComment';

const IssuePage = ({ user }) => {

    const [openIssueModal, setOpenIssueModal] = useState(false)
    const [openCommentModal, setOpenCommentModal] = useState(false)

    const [issues, setIssues] = useState([])
    const [oneIssue, setIssue] = useState([])

    const [PutIssueModal, setPutIssueModal] = useState(false)
    const [DeleteIssueModal, setDeleteIssueModal] = useState(false)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}issues`)
            .then(resIssues => resIssues.json())
            .then(resIssues => {
                for (let i = 0; i < resIssues.length; i++) {
                    fetch(`${process.env.REACT_APP_BASE_URL}issues/${resIssues[i].id}/comments`)
                        .then(resComments => resComments.json())
                        .then(resComments => {
                            resIssues[i].comments = parseInt(resComments.length)
                            setIssues([...resIssues])
                        })
                }
                
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
                        <th className='text-center align-middle'>Title</th>
                        <th className='w-25 text-center align-middle'>Description</th>
                        <th className='text-center align-middle'>Status</th>
                        <th className='text-center align-middle'>Project</th>
                        <th className='text-center align-middle'>Author</th>
                        <th className='text-center align-middle'>Comments</th>
                        <th className='text-center align-middle'>Due Date</th>
                        <th className='text-center align-middle'>Creation Date</th>
                        <th className='text-center align-middle'>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map((issue, index) => (
                        <tr key={index}>
                            <td className='text-center align-middle'>{issue.title}</td>
                            <td className='text-center align-middle'>{issue.description}</td>
                            <td className='text-center align-middle'>{issue.status}</td>
                            <td className='text-center align-middle'>{issue.project}</td>
                            <td className='text-center align-middle'>{issue.author}</td>
                            <td className="d-flex justify-content-center text-center align-middle">
                                <div className='p-2'>{issue.comments}</div>
                                <div className='p-2'>
                                    <svg type="button"
                                        onClick={() => { setOpenCommentModal(true); setIssue(issue) }}
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                    {openCommentModal && <AddComment user={user} issue={oneIssue} closeCommentModal={setOpenCommentModal} />}
                                </div>
                            </td>
                            <td className='text-center  align-middle'>{issue.due_date}</td>
                            <td className='text-center  align-middle'>{issue.creation_date}</td>
                            <td className="d-flex justify-content-center">
                                <div className='p-2 align-middle'>
                                    <svg type="button"
                                        onClick={() => { setPutIssueModal(true); setIssue(issue.id) }}
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>
                                    {PutIssueModal && <PutIssue issue={oneIssue} closeIssueModal={setPutIssueModal} />}
                                </div>
                                <div className='p-2 align-middle'>
                                    <svg
                                        type="button"
                                        onClick={() => { setDeleteIssueModal(true); setIssue(issue) }}
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                    {DeleteIssueModal && <DeleteIssue issue={oneIssue} closeIssueModal={setDeleteIssueModal} />}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IssuePage;