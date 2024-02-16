
import { Container, Nav } from './components'
function App() {

  return (
    <>
      <div className='min-w-full min-h-screen flex flex-col justify-center items-center bg-image'>
        <div className='min-w-full min-h-screen flex flex-col justify-center items-center bg-image'>
          <Nav />
          <Container />
        </div>

      </div>
    </>
  )
}

export default App
