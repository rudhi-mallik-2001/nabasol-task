
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TaskProvider, DetailsProvider, TeamProvider } from './context'
function Layout() {
    const [currentPage, setCurrentPage] = useState(1);
    const [details, setDetails] = useState({});
    const nextPage = () => {
        console.log("nextpage")
        setCurrentPage((pre) => pre + 1)
    }
    const prevPage = () => {
        console.log("hhhhh")
        setCurrentPage((pre) => pre - 1)
    }
    const addDetails = (details) => {
        setDetails((prev) => { return ({ ...prev, ...details }) })
    }

    const [tasks, setTasks] = useState([])

    const addTask = (Task) => {
        setTasks((prev) => [{ id: Date.now(), ...Task }, ...prev])
    }

    const updateTask = (id, Task) => {
        setTasks((prev) => prev.map((prevTask) => (prevTask.id === id ? Task : prevTask)))


    }

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((Task) => Task.id !== id))
    }

    const toggleComplete = (id) => {
        //console.log(id);
        setTasks((prev) =>
            prev.map((prevTask) =>
                prevTask.id === id ? {
                    ...prevTask,
                    completed: !prevTask.completed
                } : prevTask))
    }

    useEffect(() => {
        const Tasks = JSON.parse(localStorage.getItem("Tasks"))

        if (Tasks && Tasks.length > 0) {
            setTasks(Tasks)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("Tasks", JSON.stringify(tasks))
    }, [tasks])

    const [Teams, setTeams] = useState([])

    const addTeam = (Team) => {
        setTeams((prev) => [{ id: Date.now(), ...Team }, ...prev])
    }

    const updateTeam = (id, Team) => {
        setTeams((prev) => prev.map((prevTeam) => (prevTeam.id === id ? Team : prevTeam)))
    }

    const deleteTeam = (id) => {
        setTeams((prev) => prev.filter((Team) => Team.id !== id))
    }

    const toggleCompleteTeam = (id) => {
        //console.log(id);
        setTeams((prev) =>
            prev.map((prevTeam) =>
                prevTeam.id === id ? {
                    ...prevTeam,
                    completed: !prevTeam.completed
                } : prevTeam))
    }

    useEffect(() => {
        const Teams = JSON.parse(localStorage.getItem("Teams"))

        if (Teams && Teams.length > 0) {
            setTeams(Teams)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("Teams", JSON.stringify(Teams))
    }, [Teams])
    return (
        <DetailsProvider value={{ currentPage, details, nextPage, prevPage, addDetails }}>
            <TaskProvider value={{ tasks, addTask, updateTask, deleteTask, toggleComplete }}>
                <TeamProvider value={{ Teams, addTeam, updateTeam, deleteTeam, toggleCompleteTeam }}>
                    <Outlet />
                </TeamProvider>
            </TaskProvider>
        </DetailsProvider>
    )
}

export default Layout