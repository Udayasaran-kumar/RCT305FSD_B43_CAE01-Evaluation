import{UseAppContext} from"./Contextapi"
function Home(){
    const {isInstructor,setInstructor}=UseAppContext();
    return(
        <div>
            <select name="role">
                <option value="Select your role">Select your role</option>
                <option value="Instructor"onSelect={()=>setInstructor(prev=true)}>Instructor</option>
                <option value="Student">Student</option>
            </select>
        </div>
    )
}
export default Home;