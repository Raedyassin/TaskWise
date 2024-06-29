import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TaskProjectComponent(props) {
  const [isAdmin] = useState(props.isAdminProject);
  if (props.tasks.length === 0) {
    return (
      <h1 className='text-2xl font-bold text-red-400'>There is Tasks in this project</h1>
    );
  }
  return (
    <>
      {
        props.tasks.slice().reverse().map((item) => (
          <div key={item.id} className='bg-tertiary rounded-lg mx-4 mb-2 px-4 py-3'>
            <div>
              <h1 className='text-sm'><span className='font-bold'>Created in:</span> {item.created}</h1>
              <h1 className='text-sm'><span className='font-bold'>Deadline:</span> {item.deadline ? item.deadline : "don't selected"}</h1>
            </div>
            <div>
              <h1 className='font-bold text-sm'>Description:</h1>
              <p className='ml-3 text-sm'>{item.description}</p>
            </div>
            <div>
              <span className='font-bold'>Task for:</span>
              <div>
                {
                  // the member
                  <div> <span className='text-logoColor ml-3'>&#8226;</span> {item.user.name} </div>
                }
              </div>
            </div>
            {
              isAdmin &&
              <div className=''>
                <button className='bg-primary hover:bg-card px-3 py-1 rounded-lg text-tertiary'>Edit</button>
                <button className=' mx-5 mt-2 bg-primary hover:bg-card px-3 py-1 rounded-lg text-tertiary'>Delete</button>
                <button></button>
              </div>
            }
          </div>
        ))
      }
    </>
  )
}

TaskProjectComponent.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    deadline: PropTypes.string,
    description: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  isAdminProject: PropTypes.bool.isRequired,
};
