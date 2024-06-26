// import Recommendation from "../Components/recommendation/Recommendation"
import { useEffect, useState } from "react"
// import PropTypes from "prop-types";
export default function CreateTask() {
  const [aiRecommenation, setAiRecommenation] = useState([{id:1,name:'zeyad'},{id:2,name:'ayman'}]);
  const [projectMembers, setProjectMembers] = useState([{id:1,name:'zeyad'},{id:2,name:'ayman'},{id:3,name:'raed'},{id:4,name:'awab'},{id:5,name:'zeyad ahmed'},{id:6,name:'ahmed'}]);
  const [selectMembers, setSelectMembers] = useState([]);

  useEffect(() => {
    function deleteRepated() {
      let newProjectMembers = projectMembers;
      for (let i = 0; i < aiRecommenation.length; i++){
        newProjectMembers = newProjectMembers.filter((field) => field.id !== aiRecommenation[i].id);
      }
      setProjectMembers(newProjectMembers);
    }
    deleteRepated();
  },[])
  
  function deleteHandler(index, id) {
    const deletedElement = selectMembers[index];
    const newselectMembers = selectMembers.filter((field) => field.id !== id);
    setSelectMembers(newselectMembers);
    if (deletedElement.title === 'Ai') {
      setAiRecommenation([...aiRecommenation, deletedElement]);
    } else {
      setProjectMembers([...projectMembers, deletedElement]);
    }
  }

  function addHandlerAI(index, id) {
    const newItem = aiRecommenation[index]
    newItem.title = 'Ai';

    const selectMemberAdd = [newItem , ...selectMembers];
    const newaiRecommenation = aiRecommenation.filter((field) => field.id !== id);
    setSelectMembers(selectMemberAdd);
    setAiRecommenation(newaiRecommenation);
  }

  function addHandlerMembre(index, id) {
    const newItem = projectMembers[index]
    newItem.title = 'Member';

    const selectMemberAdd = [newItem , ...selectMembers];
    const newaiRecommenation = projectMembers.filter((field) => field.id !== id);
    setSelectMembers(selectMemberAdd);
    setProjectMembers(newaiRecommenation);
  }

  return (
    <div>
      <div>
        <p className='my-3 text-sm font-bold text-gray-500'>We will recommend the best <span className='underline italic text-logoColor'>members</span> for do this task!</p>
        <h1 className="text-primary font-bold text-xl underline italic">{`Let's Create a Task`}</h1>
      </div>
      <div className="my-3">
        <label htmlFor="taskDescription">Task description:</label>
        <textarea placeholder="Task Description" className="w-full bg-tertiary rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-card" name="taskDescription" rows={"2"} id="taskDescription"></textarea>
      </div>
      {/* Ai section */}
      <label className="" htmlFor="AIrecommendation">TaskWise AI recommendation member:</label>
      <div className=" grid grid-cols-12">
        <div className="col-span-11">
          <textarea placeholder="Message TaskWise AI..." className="w-full bg-tertiary h-full rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-card" name="AiRecommendation" rows={"2"} id="AIrecommendation"></textarea>
        </div>
        <div className="ml-2  col-span-1">
          <button className=" bg-primary  hover:bg-card font-bold rounded-lg w-full h-full text-tertiary  ">Find</button>
        </div>
      </div>

      {/* Reccomendation section */}
      <h1 className="mt-3">Select Members:</h1>
      <div className=" p-3 grid rounded-lg  grid-cols-9 bg-tertiary">
        <div className="col-span-3 px-3 rounded-lg">
          <div>
            <h1>AI Recommendation:</h1>
            {/* repated parte */}
            {
              aiRecommenation.map((item,index) => {
                return (
                  <div key={item.id} className='grid grid-cols-7 mt-2 rounded-lg  bg-white'>
                    <div className='col-span-6 py-1 px-2'>
                      {item.name}
                    </div>
                    <div className='col-span-1'>
                      <button className="bg-primary text-tertiary hover:bg-card py-1 px-2  rounded-xl" onClick={()=>{addHandlerAI(index,item.id)}} >Add</button>
                    </div>
                  </div>
                )
              })
            }
            {/* repated parte */}
          </div>
        </div>

        <div className="col-span-3 px-3 rounded-lg">
          <div>
            <h1>Remmber Project Members:</h1>
            {/* repated parte */}
            {
              projectMembers.map((item,index) => {
                return (
                  <div key={item.id} className='grid grid-cols-7 mt-2 rounded-lg  bg-white'>
                    <div className='col-span-6 py-1 px-2'>
                      {item.name}
                    </div>
                    <div className='col-span-1'>
                      <button className="bg-primary text-tertiary hover:bg-card py-1 px-2  rounded-xl" onClick={()=>{addHandlerMembre(index,item.id)}} >Add</button>
                    </div>
                  </div>
                )
              })
            }
            {/* repated parte */}
          </div>
        </div>

        <div className="col-span-3 px-3 rounded-lg">
          <div>
            <h1>Selected Members:</h1>
            {/* repated parte */}
            {
              selectMembers.map((item,index) => {
                return(
                  <div key={item.id} className='grid grid-cols-7 mt-2 mr-2 rounded-lg  bg-white'>
                    <div className='col-span-6 py-1 px-2'>
                      {item.name}
                    </div>
                    <div className='col-span-1'>
                      <button className="bg-primary text-tertiary hover:bg-card py-1 px-2  rounded-xl" onClick={() => deleteHandler(index,item.id)} >Delete</button>
                    </div>
                  </div>
                )
              })
            }
            {/* repated parte */}
          </div>
        </div>

      </div>
      {/* Reccomendation section end */}
      <div className="mt-3">
        <h1 className="inline-block">Task Deadline:</h1>
        <input name="taskDeadline" className="bg-tertiary ml-3 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-card" type="date" />
      </div>

      <div className="flex justify-center">
        <button className="font-bold text-tertiary bg-primary hover:bg-card m-3 rounded-full px-5 py-2 ">Generate Task</button>
      </div>

    </div>
  )
}
// CreateTask.propTypes = {
//   projectMember: PropTypes.string.isRequired,
// };