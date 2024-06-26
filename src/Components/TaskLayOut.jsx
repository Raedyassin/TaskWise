import { Outlet } from 'react-router-dom';
import SidbarLeaderMember from './sidebarLeaderMember/SidbarLeaderMember';
export default function TaskLayOut() {

  return (
    <div className="p-5  rounded-md ">
      <div>
        <h1 className=' text-2xl font-bold text-primary pl-1 '> <span className='underline italic'>Project:</span> Raed Project</h1>
      </div>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-4'>
          <Outlet />
        </div>
        <div className='col-span-1'>
          <div className='bg-rightBar rounded-t-lg px-3 pb-3'>
            <h1 className='py-2 italic font-bold text-primary'>Project Members:</h1>
            <SidbarLeaderMember
              titleHeader="Leaders"
              members = {[{id:1,name:'zeyad'},{id:2,name:'ayman'}]}
              />
          </div>
          <div className='bg-rightBar rounded-b-lg px-3 pb-3'>
            <SidbarLeaderMember
              titleHeader="Members"
              members = {[{id:3,name:'raed'},{id:4,name:'awab'},{id:5,name:'zeyad ahmed'},{id:6,name:'ahmed'}]}
              />
          </div>
        </div>
        
      </div>

    </div>
  )
}
