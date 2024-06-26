// import { useState } from "react"
import { Link } from "react-router-dom"
import TaskProjectComponent from "../Components/TaskProjectComponent/TaskProjectComponent";
import NoteComponents from "../Components/NoteComponents/NoteComponents";

export default function project() {
  // const [isLeader] = useState(true);
  return (
    <div className="">
      <div className="my-3">
        <h1>Project created in: { "22/5/2024" }</h1>
      </div>
      <div className="my-3">
        <h1>Project Description:</h1>
        <p className="bg-tertiary px-3 py-2 rounded-lg">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}</p>
      </div>
      {/* notes and tasks */}
      <div className="mb-3 grid grid-cols-12 ">
        <div className="col-span-6 rounded-lg bg-white">
          {/* task header */}
          <div className="flex mx-3 py-3 justify-between">
            <h1 className="font-bold text-2xl text-primary">Tasks: </h1>
            {
              // isLeader&&
              <Link to={"/project/createtask"} className="bg-primary hover:bg-card font-bold text-tertiary px-5 py-2 rounded-lg">Add Task</Link>
            }
          </div>
          <div>
            {/* tasks */}
            <TaskProjectComponent 
              description={`It is a long established fact that a reader will be distracted by the readable content of a page when looking It is a long established fact that a reader will be distracted by the readable content of a page when looking .`}
              createdIn={'2/5/2024'}
              deadline={'5/5/2024'}
              members={[{id:1,name:'raed'},{id:2,name:'awab'},{id:3,name:'ayman'}]}
            />
            <TaskProjectComponent 
              description={`It is a long established fact that a reader will be distracted by the readable content of a page when looking It is a long established fact that a reader will be distracted by the readable content of a page when looking .`}
              createdIn={'2/5/2024'}
              deadline={'5/5/2024'}
              members={[{id:1,name:'raed'},{id:2,name:'awab'},{id:3,name:'ayman'}]}
            />
            <TaskProjectComponent 
              description={`It is a long established fact that a reader will be distracted by the readable content of a page when looking It is a long established fact that a reader will be distracted by the readable content of a page when looking .`}
              createdIn={'2/5/2024'}
              deadline={'5/5/2024'}
              members={[{id:1,name:'raed'},{id:2,name:'awab'},{id:3,name:'ayman'}]}
            />
            <TaskProjectComponent 
              description={`It is a long established fact that a reader will be distracted by the readable content of a page when looking It is a long established fact that a reader will be distracted by the readable content of a page when looking .`}
              createdIn={'2/5/2024'}
              deadline={'5/5/2024'}
              members={[{id:1,name:'raed'},{id:2,name:'awab'},{id:3,name:'ayman'}]}
            />
          </div>
        </div>
        <div className="col-span-6 mx-3 rounded-lg bg-white">
          {/* Note header */}
          <div className="flex mx-3 py-3 justify-between">
            <h1 className="font-bold text-2xl text-primary">Notes: </h1>
            <Link to={'/project/createnote'} className="bg-primary hover:bg-card text-tertiary font-bold px-5 py-2 rounded-lg" >Add Note</Link>
          </div>
          {/* notes */}
          < NoteComponents 
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking It is a long established fact that a reader will be distracted by the readable content of a page when looking ."
            createdBy='Raed Yassin'
            createdIn='20/5/2024'
          />
          < NoteComponents
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking It is a long established fact that a reader will be distracted by the readable content of a page when looking ."
            createdBy='Raed Yassin'
            createdIn='20/5/2024'
          />
          < NoteComponents
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking It is a long established fact that a reader will be distracted by the readable content of a page when looking ."
            createdBy='Raed Yassin'
            createdIn='20/5/2024'
          />
          < NoteComponents
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking It is a long established fact that a reader will be distracted by the readable content of a page when looking ."
            createdBy='Raed Yassin'
            createdIn='20/5/2024'
          />
        </div>
      </div>

    </div>
  )
}
