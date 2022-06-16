import React from 'react';
import axios from 'axios';

const DeleteComment = ({ comment, closeCommentModal }) => {

    const deleteComment = () => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}comments/` + comment.id + '/')
            .catch(err => console.error(err))
        window.location.replace('/issues');
    }

    return (
        <div className='modalBackgroud' >
            <div className='modalContainer' >
                <div className="modal-header p-5 pb-4 border-bottom-0 flex-row-reverse">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={() => closeCommentModal(false)}
                    ></button>
                </div>
                <div>
                    <h2 className="fw-bold mb-0 text-center">Are you sure you want to delete the comment "
                        <span className='text-danger fw-bolder text-decoration-underline'>{comment.text}</span>" ?</h2>
                </div>
                <div className='mt-5 d-flex justify-content-center'>
                    <button type="button" className="btn btn-danger me-2"
                        onClick={deleteComment} >Delete Comment</button>
                    <button type="button" className="btn btn-primary me-2"
                        onClick={() => closeCommentModal(false)}>Cancel</button>
                </div>
            </div>
        </div >
    );
};

export default DeleteComment;