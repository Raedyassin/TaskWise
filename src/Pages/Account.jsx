import UserImageDesc from "../Components/UserImageDesc/UserImageDesc"
import UploadElement from "../Components/UploadElement/UploadElement"
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

    </div>
  )
}
