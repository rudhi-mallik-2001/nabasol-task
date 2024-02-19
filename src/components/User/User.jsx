import { Container, Nav, } from './index.js'

const User = () => {
    return (
        <div className='min-w-full min-h-screen flex flex-col justify-center items-center bg-image'>
            <div className='min-w-full min-h-screen flex flex-col items-center bg-image'>
                <Nav />
                <Container />
            </div>
        </div>
    )
}

export default User