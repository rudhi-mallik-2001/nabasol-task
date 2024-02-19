import { useEffect, useState } from "react"
import { useTeam } from "../../../context"

const TeamFrom = () => {
  const { addTeam } = useTeam()
  const [search, setSearch] = useState('')
  const [selectedMember, setSelectedMember] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [selectedmemberid, setSelectedMemberid] = useState(new Set())
  useEffect(() => {
    function getSearchResult(search) {
      if (search.trim() === '') {
        setSearchResult([])
        return
      }
      fetch(`https://dummyjson.com/users/search?q=${search}`)
        .then(res => res.json())
        .then((res) => setSearchResult(res.users))
        .catch((err) => console.log(err))
    }
    (getSearchResult(search))
  }, [search])
  const deleteMember = (id) => {
    const members = selectedMember.filter((member) => member.id !== id)
    setSelectedMember(members)
  }
  const addMember = (member) => {
    if (!selectedmemberid.has(member.id))
      setSelectedMember((pre) => [...pre, { ...member }])
    setSelectedMemberid(() => new Set([...selectedmemberid, member.id]))
    setSearch('')
  }
  const add = (e) => {
    e.preventDefault()

    if (selectedMember.length < 1) return
    selectedMember.map((member) => {
      addTeam({ member, completed: false })
    })
    setSelectedMember([])
  }
  return (
    <div className='w-full flex flex-col relative'>
      <form onSubmit={add} className='w-full flex flex-row flex-wrap gap-2  bg-transparent'>
        <div className="w-[80%] md:w-[83%] flex flex-wrap gap-2 justify-start items-center border-2 rounded-md border-indigo-500 px-1">
          {
            selectedMember.map((member, idx) => {
              return (
                <div key={idx} className="w-fit h-6 bg-slate-600 py-1 px-2 rounded-lg flex flex-row justify-center items-center gap-2 text-[12px] text-[#fff]">
                  <span>{member.firstName}</span>
                  <button
                    onClick={() => deleteMember(member.id)}
                    className="inline-flex rounded-lg text-sm border-0 py-1 justify-center items-center shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </button>
                </div>
              )
            })
          }
          <input
            className="flex h-7 rounded-md border-0  bg-transparent px-3 text-[12px] placeholder:text-gray-600 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 "
            type="text"
            placeholder="Add member..."
            disabled=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
        <button type="submit" className="rounded-md text-[12px] h-7 px-3 py-1 bg-blue-600 text-center text-white shrink-0">
          Add
        </button>
      </form>
      {
        searchResult.length > 1 &&
        <div className={`w-full max-h-[100px] absolute top-[100%] overflow-x-hidden overflow-scroll flex flex-col gap-2 bg-[#fff] p-2 border-2`}>
          {
            searchResult?.map((member, idx) => {
              const bgClass = selectedmemberid.has(member.id) ? 'bg-[#bcbaba] text-[#000]' : ''
              return (
                <div key={idx} className={`w-full h-6 p-1 cursor-pointer border-b-2 text-[#bcbaba] text-[12px] ${bgClass}`}
                  onClick={() => addMember(member)}>
                  <p>{member.firstName} {member.lastName}</p>
                </div>
              )
            })
          }
        </div>}
    </div>
  )
}

export default TeamFrom