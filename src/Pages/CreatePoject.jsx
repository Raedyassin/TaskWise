import AddFieldForm from "../Components/AddFieldForm/AddFieldForm"
export default function CreatePoject() {
  return (
    <div className="px-5 py-4">
      <h1 className="italic mb-3 text-2xl font-bold text-primary pl-1 underline ">My Projects</h1>

      {/* <div className="h-1  my-2 bg-tertiary"></div> */}

      <div className="bg-tertiary  rounded-lg shadow-xl shadow-right ">
        <form className="p-5 grid" >
          <label  htmlFor="1"  className="font-bold">Project Name:</label>
          <input className="mt-1 mb-2 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-logoColor" placeholder="Enter Project Name..." id='1' type="text" name="projectName" />
          
          <label className="mt-1 font-bold" htmlFor="2">Project Description:</label>
          <textarea className="mt-1 mb-2 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-logoColor" placeholder="Enter Project Description..." id='2' rows='7' name="projectDescription">
            </textarea>
          
        {/* Leaders */}
        <div>
          <h1 className='font-bold underline'>Leaders:</h1>
        </div>
          <AddFieldForm fieldName='Leader' />
          
        {/* Members */}
        <div>
          <h1 className='font-bold underline'>Members:</h1>
        </div>
          <AddFieldForm fieldName='Member'/>
          
          <div className="flex justify-center">
            <button className="mt-2 font-bold text-tertiary hover:bg-secondary px-10 py-2 bg-logoColor rounded-full ">Create Project</button>
          </div>
        </form>
      </div>


    </div>
  )
}
