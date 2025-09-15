import { useEffect, useState } from "react";
// import MYimage from "../assets/Myimage";
import './Style.css';

function Idcard(){

    const[name, setName] = useState("");
    const[ID, setID] = useState("");
    const[Email, setEmail] = useState("");
    const[phone, setphone] = useState("");
    const[address, setaddress] = useState("");
    const[image, setImage] = useState("");

    const Image = (e) => {
    if (e.target.files && e.target.files[0]) {
    setImage(URL.createObjectURL(e.target.files[0]));
    }
    }

    useEffect(() => {
        console.log("Name updated:", name);
    }, [name]);

    return(
        <>

        <div>
    <label htmlFor="image">Add image</label>
    <input
        id="image"
        type="file"
        onChange={Image} classname="filetype"
        />
        <label htmlFor="name">Name</label>
            <input
            id="name"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange = {(e) => setName(e.target.value)}

            />
            <label htmlFor="ID">ID</label>
            <input
            id="ID"
                type="text"
                placeholder="Enter ID"
                value={ID}
                onChange = {(e) => setID(e.target.value)}
            />
            <label htmlFor="Phone">phone</label>
            <input
            id="phone"
                type="text"
                placeholder="Enter ph.no"
                value={phone}
                onChange = {(e) => setphone(e.target.value)}
            />
            <label htmlFor="Email">Email</label>
            <input
            id="Email"
                type="text"
                placeholder="Enter Email"
                value={Email}
                onChange = {(e) => setEmail(e.target.value)}
            />
            <label htmlFor="address">address</label>
            <input
            id="address"
                type="text"
                placeholder="Enter address"
                value={address}
                onChange = {(e) => setaddress(e.target.value)}
            />
            </div>
            <div>
            <img alt="" src={image} id="image" />
            <h2>name:{name}</h2>
            <h2>ID:{ID}</h2>
            <h2>phone:{phone}</h2>
            <h2>Email:{Email}</h2>
            <h2>address:{address}</h2>
            </div>
        </>
    )
}

export default Idcard;


