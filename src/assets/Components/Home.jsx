
import Procomp from "./Components/Procomp";
import Stcomp from "./Components/Stcomp";
import Conditional from "./Components/Conditional";
function Home(){
    return(
        <div>
            <div>Header</div>
            <Procomp name={"value1"} messa={"value2"}/>
            <Stcomp />
            <Conditional isLoggedin={true}/>
            <Conditional isLoggedin={false}/>
        </div>
    )
}

export default Home;