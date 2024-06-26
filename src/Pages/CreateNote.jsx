// import Recommendation from "../Components/recommendation/Recommendation"
// import PropTypes from "prop-types";
export default function CreateNote() {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-primary mt-5 font-bold text-xl underline italic">{`Let's Create a Note`}</h1>
        </div>
        <div className="my-3">
          <label className="font-bold" htmlFor="taskDescription">Note:</label>
          <textarea placeholder="Note Description" className="w-full bg-tertiary rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-card" name="taskDescription" rows={"5"} id="taskDescription"></textarea>
        </div>
        </div>
        <div className="flex justify-center">
          <button className="font-bold text-tertiary bg-primary hover:bg-card m-3 rounded-full px-5 py-2 ">Generate Note</button>
      </div>
    </div>
  )
}
// CreateTask.propTypes = {
//   projectMember: PropTypes.string.isRequired,
// };