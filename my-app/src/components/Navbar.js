import {Link} from 'react-router-dom';
function Navbar(){
    return(
    <nav style={{padding : '10px' , background: '#ddd' }}>
        <Link to = "/home">Home</Link>
        <Link to = "/about">About </Link>
        <Link to = "/project">Project</Link>
        <Link to = "/Contact">Contact</Link>

    </nav>
    );
}

export default Navbar 