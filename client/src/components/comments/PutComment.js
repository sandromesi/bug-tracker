import React, { useState } from 'react';
import axios from 'axios';

const PutComment = ({ comment, closeCommentModal }) => {

    const [text, setText] = useState(comment.text);

    const editComment = (e) => {
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_BASE_URL}comments/${comment.id}/`, {
            
            text: text,
            author: comment.author,
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
                <div className="modal-body p-5 pt-0">
                    <form className="">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-3"
                                value={text}
                                required
                                onChange={(e) => setText(e.target.value)} />
                            <label htmlFor="floatingInput" >Comment: </label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                            onClick={editComment} >Edit Comment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PutComment;