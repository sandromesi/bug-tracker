import React, { useState, useEffect } from 'react';

const Comments = ({ issue }) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}issues/${issue}/comments`)
            .then(res => res.json())
            .then(res => {
                setComments(res)
            })
    }, [])

    return (
        <div>
            <table className="table table-hover table-bordered border-primary">
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Comment</th>
                        <th>author</th>
                        <th>Creation Date</th>
                        <th>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((comment, index) => (
                        <tr key={index}>
                            <td className='align-middle'>{comment.text}</td>
                            <td className='align-middle'>{comment.author}</td>
                            <td className='align-middle'>{comment.creation_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Comments;