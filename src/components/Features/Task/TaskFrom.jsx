import { useState } from 'react'
import { useTask } from '../../../context/';
const TaskFrom = () => {
    const [task, setTask] = useState("")
    const { addTask } = useTask()

    const add = (e) => {
        e.preventDefault()

        if (!task) return

        addTask({ task, completed: false })
        setTask("")
    }
    return (
        <form onSubmit={add} className="w-full flex flex-row flex-nowrap gap-2">
            <div className="w-full">
                <input
                    className="flex h-7 w-full rounded-md border-2 border-indigo-500 bg-transparent px-3 py-1 text-[12px] placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                    type="text"
                    placeholder="Add Task..."
                    disabled=""
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            {/* 
            <input
                type="text"
                placeholder="Write Task..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                
            /> */}
            <button type="submit" className="rounded-md text-[12px] h-7 px-3 py-1 bg-blue-600 text-center text-white shrink-0">
                Add
            </button>
        </form>
    )
}

export default TaskFrom