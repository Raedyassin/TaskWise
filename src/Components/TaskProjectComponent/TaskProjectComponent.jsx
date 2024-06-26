import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TaskProjectComponent(props) {
  const [isAdmin] = useState(true)
  return (
    <div className='bg-tertiary rounded-lg mx-4 mb-2 px-4 py-3'>
      <div>
        <h1 className='text-sm'><span className='font-bold'>Created in:</span> { props.createdIn}</h1>
        <h1 className='text-sm'><span className='font-bold'>Deadline:</span> {props.deadline }</h1>
      </div>
      <div>
        <h1 className='font-bold text-sm'>Description:</h1>
        <p className='ml-3 text-sm'>{props.description }</p>
      </div>
      <div>
        <span className='font-bold'>Task for:</span> 
        <div>
          {
            props.members.map((items) => {
              return <div key={items.id}> <span className='text-logoColor ml-3'> &#8226;</span>  {items.name} </div>
            })
          }
        </div>
      </div>
      {
        isAdmin &&
        <div className=''>
          <button className='bg-primary hover:bg-card px-3 py-1 rounded-lg text-tertiary'>Edite</button>
          <button className=' mx-5 mt-2 bg-primary hover:bg-card px-3 py-1 rounded-lg text-tertiary'>Delete</button>
          <button></button>
        </div>
      }
    </div>
  )
}
TaskProjectComponent.propTypes = {
  createdIn: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  members: PropTypes.string.isRequired,
};