import UserImageDesc from "../Components/UserImageDesc/UserImageDesc"
import UploadElement from "../Components/UploadElement/UploadElement"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock } from '@fortawesome/free-solid-svg-icons';


export default function Account() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div style={{width:"22%"}} className="mt-0 inline-block px-5">
        <UserImageDesc 
          textColor ='text-black'
          hover="text-logoColor"
          imageURL='../../../public-resources/download.jpeg'
          name='Raerd yassin'
          email='raed@gamil.com' />
        </div>
        <div className="mr-5">
          <UploadElement type='image' text="Upload Profile Picture" />
        </div>
      </div>
      
      <div className="h-1 mx-5 bg-tertiary"></div>

      <div className="bg-tertiary m-5 rounded-lg shadow-xl shadow-right ">
        <form className="p-5 grid" >
          <label  htmlFor="1" >First Name:</label>
          <input className="mt-1 mb-2 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-logoColor" placeholder="Enter you FirstName..." id='1' type="text" name="firstName" />
          
          <label className="mt-1" htmlFor="2">Last Name:</label>
          <input className="mt-1 mb-2 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-logoColor" placeholder="Enter you LastName..." id='2' type="text" name="lastName" />
          
          <label className="mt-1" htmlFor="3">Email:</label>
          <input className="mt-1 mb-2 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-logoColor" placeholder="Enter you Email..." id='3' type="text" name="email" />

          <label className="mt-1" htmlFor="4">Date of birth:</label>
          <input className="mt-1 mb-2 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-logoColor"  id='4' type="date" name="dataOfBirth" />
          
          <label className="mt-1" htmlFor="5">New Password:</label>
          <input className="mt-1 mb-2 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-logoColor" placeholder="Enter New Password..." id='5' type="password" name="newPassword" />
          
          <label className="mt-1" htmlFor="5">Confirm Password:</label>
          <input className="mt-1 mb-2 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-logoColor" placeholder="Enter New Password..." id='6' type="password" name="confirmPassword" />
          

          
          <div className="flex justify-center">
            <button className="mt-2 font-bold text-tertiary hover:bg-secondary px-10 py-2 bg-logoColor rounded-full ">Save</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}
