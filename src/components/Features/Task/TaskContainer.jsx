import { TaskItem, TaskFrom } from '../index'
import { useTask } from '../../../context';

const TaskContainer = ({name}) => {
  const { tasks } = useTask()
  return (
    <div className={`w-full h-full ${name} flex-col  gap-2`}>
      <div className='w-full flex flex-col  gap-2'>
        <div className='text-center text-black-500 font-bold text-[16px]'>
          <p>Task</p>
        </div>
        <div className='text-black-500 font-bold text-[12px]'>
          <p>Add Task</p>
        </div>
        <TaskFrom />
      </div>
      <div className='w-full  h-[220px] overflow-scroll overflow-x-hidden scroll-smooth flex flex-col gap-2'>
        {tasks.map((Task) => (
          <div key={Task.id}
            className='w-full'
          >
            <TaskItem Task={Task} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default TaskContainer