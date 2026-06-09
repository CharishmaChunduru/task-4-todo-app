import { useState } from "react";
export const Todo = () => {
    const [input,setInput] = useState("");
    const [tasks,setTasks] = useState([]);
    const [edit,setEdit] = useState(false);
    const [editId,setEditId]= useState("");

    const handler = (event) => {
        console.log("1");
        const {name,value} = event.target;
        if(name === "task"){
            setInput(value);
        }
    };

    const addTaskHandler = ()=>{
        if(!edit){
            if(input===""){
                alert("please enter a task!");
            }else{
                const data = {
                    id:Date.now(),
                    text:input,
                };
                setTasks((prev) => [...prev,data]);
            }
        }else{
            if(input===""){
                alert("please enter a task!");
        }
        else{
            const data = tasks.filter((task)=>{
                if(task.id === editId){
                    task.text = input;
                }
                return task;
            });
            
            setTasks(data);
            setInput("");
            setEditId("");
            setEdit(false);
        }
    }
    };

    const deleteTask =(id)=>{
        const data = tasks.filter((task)=> task.id!==id);
        console.log(data);
        setTasks(data);
        

    };

    const editTask = (data) =>{
        console.log(data);
        setInput(data.text);
        setEdit(true);
        setEditId(data.id);
    };
    return(
        <>
            <h1> Building Todo App</h1>
            <textarea 
                rows={10} 
                cols={30} 
                name="task" 
                value={input} 
                onChange={handler}
            />
            <br/>
            <button onClick={addTaskHandler}>
                {
                   edit? "Click here to save your edit":"click here to add a task!"
                }
            </button>
            {console.log(tasks)}
            
                {tasks && tasks.length > 0?
                    tasks.map((task) => {
                        return(
                            <div key={task.id} style={{border:"2px solid red",
                                marginBottom:"16px",
                                padding:"8px",
                            }}
                            >
                                <h3>{task.text}</h3>
                                <button onClick={()=>editTask(task)}>Edit</button>
                                <button onClick={()=>deleteTask(task.id)}>Delete</button>
                            </div>
                        );
                    })
                :null}
                
            
        </>
    );
};

{
    id:1;
    text:""
}