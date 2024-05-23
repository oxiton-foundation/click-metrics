import Home_section1  from './home_section1';
import Middle from './Middle';

const Home:React.FC = () => {
    
    return (
        <>
        <div className='bg-gray-200 p-5'>
        <div className="ml-10">
        <Home_section1/>
        <Middle />
        </div>
        </div>
        
        </>
    );
}

export default Home;
