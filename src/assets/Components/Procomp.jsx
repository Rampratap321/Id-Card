function Procomp(props){
    console.log(props);

    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.messa}</p>
        </>
    )
}

export default Procomp;