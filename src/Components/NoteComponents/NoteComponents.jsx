import PropTypes from 'prop-types';
import { useState } from 'react';

export default function NoteComponents(props) {
    const [isOwner] = useState(true);

  return (
        <div className='bg-tertiary rounded-lg mx-4 mb-2 px-4 py-3'>
      <div>
        <h1 className='text-sm'><span className='font-bold'>Created by:</span> {props.createdBy }</h1>
        <h1 className='text-sm'><span className='font-bold'>Created in:</span> { props.createdIn}</h1>
      </div>
      <div>
        <h1 className='font-bold text-sm'>Note:</h1>
        <p className='ml-3 text-sm'>{props.description }</p>
      </div>
      {
        isOwner &&
        <div className=''>
          <button className='bg-primary hover:bg-card px-3 py-1 rounded-lg text-tertiary'>Edite</button>
          <button className=' mx-5 mt-2 bg-primary hover:bg-card px-3 py-1 rounded-lg text-tertiary'>Delete</button>
        </div>
      }
    </div>

  )
}
NoteComponents.propTypes = {
  createdIn: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};