import PropTypes from 'prop-types';
import { baseURL, COMMENT } from '../../API/API';
import axios from 'axios';
import { useState } from 'react';

export default function NoteComponents(props) {
  const [comments, setComments] = useState(props.comments);

  async function deleteHandle(id) {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${baseURL}/${COMMENT}${id}/`, {
        headers: {
          "Authorization": `Token ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // Remove the comment from the state
      setComments(comments.filter(comment => comment.id !== id));
    } catch (err) {
      console.log(err.message);
    }
  }

  function EditeNote(comment) {
    console.log(comment.project)
    console.log(comment.id)
    window.location.pathname = `/project/${comment.project}/editenote/${comment.id}`;
  }

  if (comments.length === 0) {
    return (
      <h1 className='text-2xl font-bold text-red-400'>There are no Notes in this project</h1>
    );
  }

  return (
    <>
      {
        comments.slice().reverse().map((comment) => (
          <div key={comment.id} className='bg-tertiary rounded-lg mx-4 mb-2 px-4 py-3'>
            <div>
              <h1 className='text-sm'><span className='font-bold'>Created by:</span> {comment.user.name}</h1>
              <h1 className='text-sm'><span className='font-bold'>Created on:</span> {comment.created}</h1>
            </div>
            <div>
              <h1 className='font-bold text-sm'>Note:</h1>
              <p className='ml-3 text-sm'>{comment.text}</p>
            </div>
            {
              (props.userId === comment.user.id || props.isAdminProject) &&
              <div className=''>
                <button onClick={()=>EditeNote(comment)} className='bg-primary hover:bg-card px-3 py-1 rounded-lg text-tertiary'>Edit</button>
                <button onClick={() => deleteHandle(comment.id)} className='mx-5 mt-2 bg-primary hover:bg-card px-3 py-1 rounded-lg text-tertiary'>Delete</button>
              </div>
            }
          </div>
        ))
      }
    </>
  );
}

NoteComponents.propTypes = {
  userId: PropTypes.string.isRequired,
  isAdminProject: PropTypes.bool.isRequired, // Changed to bool
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  })).isRequired,
};
