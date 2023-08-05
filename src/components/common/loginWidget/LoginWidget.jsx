import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';


const LoginWidget = () => {
    return (
        <Link to="/login"> 
            <PersonIcon className="icon" color="action" />
        </Link>
    )
}

export default LoginWidget