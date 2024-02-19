import { useState } from "react"
import { useTeam } from "../../../context"

const TeamItem = ({Team}) => {
  console.log(Team)
  const [firstName, setTeamMsg] = useState(Team.member.firstName)
  const { deleteTeam, toggleCompleteTeam } = useTeam()

  const toggleCompleted = () => {
    //console.log(Team.id);
    toggleCompleteTeam(Team.id)
  }
  return (
    <div
      className={`h-6 text-[12px] flex border-b-2 border-b-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black"
        }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={Team.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg border-transparent`}
        value={firstName}
        onChange={(e) => setTeamMsg(e.target.value)}
        readOnly={true}
      />

      {/* Delete Team Button */}
      <button
        className="inline-flex rounded-lg text-sm border-0 py-1 justify-center items-center  hover:bg-gray-100 shrink-0"
        onClick={() => deleteTeam(Team.id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </button>
    </div>
  )
}

export default TeamItem