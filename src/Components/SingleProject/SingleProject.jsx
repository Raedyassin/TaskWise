import './singleproject.module.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
export default function SingleProject(props) {
  const [done, setDone] = useState('');
  useEffect(() => {
    if ( props.done.toLowerCase() == "yes") {
      setDone(<svg className='inline-block pb-1' width={'20px'} height={'20px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#3AF533' d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>)
    } else {
      setDone(<svg className='inline-block' width={'15px'} height={'15px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill='#F53333' d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9H112z"/></svg>)
    }
  },[props.done])
  
  return (
    <divc className="block bg-tertiary rounded-lg px-5 py-3 break-words m-5  ">
      <h1 className='font-bold italic text-primary text-2xl'>{props.name}</h1>
      <div className="h-1 bg-white" style={{width:"25%"}}></div>

      <p className='text-sm sans-serif'> <span className='text-logoColor  font-bold'> <span className='text-xl'>&bull; </span> Description</span>:{ " "+props.description }</p>
      <p className='text-Gradient font-bold'><span className='text-logoColor text-xl font-bold'>&bull;</span > { props.members+" "} Members in project </p>
      <p className='text-Gradient font-bold'><span className='text-logoColor text-xl font-bold'>&bull;</span> Project is Done: {" "+ props.done.toUpperCase()} {done}  </p>
    </divc>
  )
}
SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  members: PropTypes.string.isRequired,
  done: PropTypes.string.isRequired,

};