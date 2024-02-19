import { createContext, useContext } from "react"

export const TeamContext = createContext({
    Teams: [
        {
            id: 1,
            Team: " Team msg",
            completed: false,
        }
    ],
    addTeam: (Team) => { },
    updateTeam: (id, Team) => { },
    deleteTeam: (id) => { },
    toggleCompleteTeam: (id) => { }
})


export const useTeam = () => {
    return useContext(TeamContext)
}

export const TeamProvider = TeamContext.Provider