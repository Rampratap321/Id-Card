function Conditional(props){
    return (

        <>
            {
                props.isLoggedin ?
                (
                    <div>Welcome</div>
                ):(
                    <div>Login</div>
                )
            }
        </>
    )
}

export default Conditional;