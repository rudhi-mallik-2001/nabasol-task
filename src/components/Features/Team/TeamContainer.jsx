import { useTeam } from "../../../context"
import TeamFrom from "./TeamFrom"
import TeamItem from "./TeamItem"

const TeamContainer = ({ name }) => {
  const { Teams } = useTeam()
  return (
    <div className={`w-full h-full ${name} flex-col pt-4 gap-2`}>
      <div className='w-full flex flex-col  gap-2'>
        <div className='text-center text-black-500 font-bold text-[16px]'>
          <p>Team</p>
        </div>
        <div className='text-black-500 font-bold text-[12px]'>
          <p>Add Member</p>
        </div>
        <TeamFrom />
      </div>
      <div className='w-full  h-[220px] overflow-scroll overflow-x-hidden scroll-smooth flex flex-col gap-2'>
        {Teams.map((Team) => (
          <div key={Team.id}
            className='w-full'
          >
            <TeamItem Team={Team} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamContainer