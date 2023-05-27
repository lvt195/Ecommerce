import React, { useContext, useEffect, useState } from "react";
//import sidebarcontext
import { SidebarContext } from "../contexts/SidebarContext";
//import cartcontext
import { CartContext } from "../contexts/CartContext";
//import icon and Link
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import{AiOutlineSearch} from 'react-icons/ai'

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Feedback",
    path: "/feedback",
  },
];

const Search
 = () => {
  return (
    <div className="search">
            <input type="text" placeholder="Search"></input>
            <AiOutlineSearch/>
          </div>
  )
}

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  //event listener
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6 '} fixed w-full z-10 transition-all`}>
      <div className="flex container mx-auto items-center justify-between h-full">
        {/*logo*/}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} />
          </div>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation, index) => {
            return (
              <Link key = {index} to={navigation.path} className="mr-5 hover:text-gray-900">
                {navigation.name}
              </Link>
            );
          })}
          <Search />
        </nav>
        {/*cart*/}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
