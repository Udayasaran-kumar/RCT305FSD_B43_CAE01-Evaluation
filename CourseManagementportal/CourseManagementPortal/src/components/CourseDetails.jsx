import axios from "axios";
import{UseAppContext} from"./Contextapi"
function CourseDetails(){
     const {isInstructor}=UseAppContext();
    const fetchdata=async()=>{
        try {
            const data=await axios.get('https://coursemanagementportal-6e617-default-rtdb.firebaseio.com/courses');
            console.log(data);
            data=Object.entries(data);
        } catch (error) {
            console.log(error);
        }

    }
    fetchdata();
    return(
        <div>
            {data.map(ele=>(
                <div id={coursecard}>
                    <h2>{ele.code}</h2>
                    <img src={ele.coverImage} alt={ele.code} />
                    <p>Credits:{ele.credits}</p>
                    <p>description:{ele.description}</p>
                    <p>id:{ele.id}</p>
                    <p>Instructor:{ele.instructor}</p>
                    <h2>Title:{ele.name}</h2>
                    <p>Term:{ele.term}</p>
                </div>
            ))

            };
            {isInstructor?(
                <div>
                   <button>Add Course</button>
                   <button>Delete Course</button>     
                </div>
            ):""}
        </div>
    );
    
}
export default CourseDetails;