import React, { useState } from 'react';
import axios from 'axios';
import Comments from './Comments';

const AddComment = ({ user, issue, closeCommentModal }) => {

    const [text, setText] = useState('');

    const postComment = () => {
        axios.post(`${process.env.REACT_APP_BASE_URL}comments/`, {
            text: text,
            author: user,
            issue: issue.id
        })
            .catch(err => console.error(err))
        window.location.replace('/issues');
    }

    return (
        <div className='modalBackgroud' >
            <div className='modalContainer' >
                <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h2 className="fw-bold mb-0">Comments</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={() => closeCommentModal(false)}
                    ></button>
                </div>

                <div className="overflow-auto">
                    <Comments issue={issue.id} />
                </div>

                <div className="modal-body p-5 pt-0">
                    <form className="">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-3"
                                required
                                onChange={(e) => setText(e.target.value)} />
                            <label htmlFor="floatingInput" >Comment: </label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                            onClick={postComment} >Comment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddComment;