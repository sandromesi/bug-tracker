import React from 'react';
import axios from 'axios';

const DeleteIssue = ({ issue, closeIssueModal }) => {

    const deleteIssue = () => {
        axios.delete('http://127.0.0.1:8000/issues/' + issue.id + '/')
            .catch(err => console.error(err))
        window.location.replace('/');
    }

    return (
        <div className='modalBackgroud' >
            <div className='modalContainer' >
                <div className="modal-header p-5 pb-4 border-bottom-0 flex-row-reverse">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={() => closeIssueModal(false)}
                    ></button>
                </div>
                <div>
                    <h2 className="fw-bold mb-0 text-center">Are you sure you want to delete the issue "
                        <span className='text-danger fw-bolder text-decoration-underline'>{issue.title}</span>" ?</h2>
                </div>
                <div className='mt-5 d-flex justify-content-center'>
                    <button type="button" className="btn btn-danger me-2"
                        onClick={deleteIssue} >Delete Issue</button>
                    <button type="button" className="btn btn-primary me-2"
                        onClick={() => closeIssueModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteIssue;