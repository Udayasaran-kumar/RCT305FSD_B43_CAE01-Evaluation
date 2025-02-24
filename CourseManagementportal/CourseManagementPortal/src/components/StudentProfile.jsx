function StudentProfile(){
    const fetchdata=async()=>{
        try {
            const data=await axios.get('https://coursemanagementportal-6e617-default-rtdb.firebaseio.com/users');
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
            <div id={studentcard}>
                <h2>{ele.name}</h2>
                <img src={ele.avatar} alt={ele.code} />
                <p>email:{ele.email}</p>
                <p>id:{ele.id}</p>
                <p>profile:{ele.major}</p>
                <p>year:{ele.year}</p>
            </div>
        ))

        };
        </div>
    )
}
export default StudentProfile