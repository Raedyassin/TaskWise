import { Link } from 'react-router-dom';
import './singleproject.module.css'
import PropTypes from 'prop-types';

export default function SingleProject(props) {
  return (
    <divc className="block  bg-tertiary rounded-lg px-5 py-3 break-words m-5  ">
      {/* <h1 className='font-bold italic underline text-primary text-2xl'></h1> */}
      <Link to={`/project/${props.projectId}`} className='font-bold italic  underline hover:text-card text-primary text-2xl'>{props.name}</Link>
      <p className='text-sm sans-serif'> <span className='text-logoColor  font-bold'> <span className='text-xl'>&bull; </span> Description</span>:{ " "+props.description }</p>
      <p className='text-Gradient '><span className='text-logoColor text-xl font-bold'>&bull;</span> <span className='font-bold text-sm'>Created in:</span>  { props.createdIn}  </p>
      <p className='text-Gradient '><span className='text-logoColor text-xl font-bold'>&bull;</span> <span className='font-bold text-sm'>Deadline:</span> { props.deadline}</p>
    </divc>
  )
}
SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdIn: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,

};