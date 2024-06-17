import { Link, NavLink } from "react-router-dom"

function Navbar(){
    return(
        <div className="font-dragon bg-slate-500 text-font= ">
            <NavLink to ="/"> Home </NavLink>
            {/* <Link to ="/userprofile"> Profile </Link> */}
            <NavLink to ="/charactercreator"> Creator Character </NavLink>
            {/* <NavLink to ="/charactersheet"> Character Sheet </NavLink> */}
            {/* <NavLink to ="/checkout"> Checkout </NavLink> */}
        </div>
    )
}

export default Navbar