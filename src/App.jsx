
import { Link } from 'react-router-dom';
function App() {
  return (
      <div className='min-w-full min-h-screen flex flex-row flex-wrap justify-center items-center gap-x-2 bg-image'>
        <Link to="/task-one" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Task one
        </Link>
        <Link to="/task-two" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Task two
        </Link>
      </div> 
  )

}

export default App
