import { useState } from "react";

function LocalStorageDemo(){
    const [name, setName] = useState("");
    const [value, setValuesetName] = useState("");

    const save = () => {
        if(name) {
           localStorage.setItem("username", name) ;
        }

        const savedName = localStorage.getItem("username");
        if(savedName){
            setValue(savedName)
        }
    };
    
    return(
        <>
        <div>
            <h2>use state name:</h2>
            <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)} />
            </div>

        <button onclick={save}>save </button>
</>
    );
}
