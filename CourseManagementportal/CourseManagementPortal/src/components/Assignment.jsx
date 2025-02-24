import{UseAppContext} from"./Contextapi"
function Assignment(){
    const {isInstructor}=UseAppContext();
    const fetchdata=async()=>{
        try {
            const data=await axios.get('https://coursemanagementportal-6e617-default-rtdb.firebaseio.com/assignments');
            console.log(data);
            data=Object.entries(data);
        } catch (error) {
            console.log(error);
        }

    }
    fetchdata();
    return(
        <div>
            {data.map(elem=>(elem.map(ele=>(
                <div id={assignmentcard}>
                     <p>Credits:{ele.totalPoints}</p>
                    <p>description:{ele.description}</p>
                    <p>id:{ele.id}</p>
                    <p>Due on:{ele.dueDate}</p>
                    <h2>Title:{ele.title}</h2>
                    <p>Weightage:{ele.totalPoints}</p>
                </div>
            ))))

            };
            {isInstructor?(
                <div>
                   <button>Add</button>
                   <button>Delete</button>     
                </div>
            ):""}
        </div>
    )
}
export default Assignment;
