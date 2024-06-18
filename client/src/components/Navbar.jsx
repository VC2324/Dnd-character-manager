// import { Link, NavLink } from "react-router-dom"

// function Navbar(){
    
//     return(
//         // <div className="font-dragon bg-slate-500 flex space-x-4 items-center">
//         //     <NavLink   className="text-gray-800 hover:text-yellow-500 transform hover:scale-110 transition duration-300" to ="/"> Home 
//         //     </NavLink>
//         //     {/* <Link to ="/userprofile"> Profile </Link> */}
//         //     <NavLink   className="text-gray-800 hover:text-yellow-500 transform hover:scale-110 transition duration-300" to ="/charactercreator"> Creator Character </NavLink>
//         //     {/* <NavLink to ="/charactersheet"> Character Sheet </NavLink> */}
//         //     {/* <NavLink to ="/checkout"> Checkout </NavLink> */}
//         // </div>
//         <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //   <img src="./Assets/dndlogo.png" className="h-8" alt="Dnd Logo" />
//       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">boob</span>
//     </NavLink>
//     <button
//       type="button"
//       className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//       aria-controls="navbar-solid-bg"
//       aria-expanded="false"
//     >
//       <span className="sr-only">Open main menu</span>
//       <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
//       </svg>
//     </button>
//     <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
//       <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//         <li>
//           <NavLink
//             to="/"
//             className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
//             activeClassName="text-blue-700 dark:text-blue-500"
//             exact
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/charactercreator"
//             className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//             activeClassName="text-blue-700 dark:text-blue-500"
//           >
//             Create Character
//           </NavLink>
//         </li>

//       </ul>
//     </div>
//   </div>
// </nav>

//     )
// }

// export default Navbar

import { NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom"; // Adjust the import based on your context setup

function Navbar() {
    const { currentUser, setCurrentUser } = useOutletContext(); // Adjust context usage based on your application

    function handleLogout() {
        setCurrentUser(null);
        fetch('/api/logout', {
            method: 'DELETE'
        });
    }

    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="./Assets/dndlogo.png" className="h-8" alt="Dnd Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                </NavLink>
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-solid-bg"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <NavLink
                                to="/"
                                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                                activeClassName="text-blue-700 dark:text-blue-500"
                                exact
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/charactercreator"
                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                activeClassName="text-blue-700 dark:text-blue-500"
                            >
                                Create Character
                            </NavLink>
                        </li>
                        {/* Add other NavLink items here as needed */}
                        <li>
                            <button
                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                onClick={handleLogout}
                            >
                                Log out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
