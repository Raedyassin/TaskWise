import { Link } from "react-router-dom"
export default function CreateProjectButton() {
  return (
    <div >
      <Link to='/createproject' className="bg-logoColor hover:bg-secondary text-gray-100 font-bold py-2 px-4 rounded">
        Create New Project  
      </Link>
    </div>
  )
}

