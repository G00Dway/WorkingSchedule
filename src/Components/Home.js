import {Link, Route, Routes} from "react-router-dom";
import Admin from "./Admin"
import User from "./User";


const Home=()=>{
    return(

        <div>
            <Link to={"admin"}>Admin</Link>
            <Link to={"user"}>User</Link>
            <Routes>
                <Route path={"/admin/*"} element={<Admin/>}/>
                <Route path={"/user"} element={<User/>}/>
            </Routes>
        </div>
    )
}

export default Home;