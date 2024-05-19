import './style.css'
import Home_section1  from './home_section1';
import Middle from './Middle';

const Home:React.FC = () => {
    
    return (
        <>
        <div className='backgroundof1stsection'>
        <div style={{marginLeft:'50px'}}>
        <Home_section1/>
        <Middle />
        </div>
        </div>
        
        </>
    );
}

export default Home;
