import { useState } from "react";

function stcomp(){
    const[value,setValue] = useState(0);
    return(
        <>
        <div onclick ={() => setValue(100)}>+(plus)</div>
        <div>{value}</div>
        <div onclick ={() => setValue(200)}>-()</div>
        </>
    )
}
export default stcomp;