import { Link } from "react-router-dom"
import{UseAppContext} from"./Contextapi"
function Navbar(){
    const {isInstructor,setInstructor}=UseAppContext();
    return(
        <div>
          <Link to='/Home'>Home</Link>
          <Link to={'/components/CourseDetails'}>CourseDetails</Link>
          <Link to={'/components/Assignment'}>Assignment</Link>
          {isInstructor?"":(<Link to={'/components/StudentProfile'}>StudentProfile</Link>)}           

        </div>
    )
}
export default Navbar;