import React, { useContext, useEffect, useState } from "react";
//import sidebarcontext
import { SidebarContext } from "../contexts/SidebarContext";
//import cartcontext
import { CartContext } from "../contexts/CartContext";
//import icon and Link
import { BsBag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.svg";
import{AiOutlineSearch} from 'react-icons/ai'
import { ProductContext } from "../contexts/ProductContext";
import { useDispatch } from "react-redux";
import { SearchProductList, SearchName } from "./SearchSlice";

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

const Search= () => {
  const { products } = useContext(ProductContext);
  //get only men's & women's clothing category
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [text,setText]=useState('')
  const [filteredProducts,setfilteredProducts]=useState([])
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }
  const handleSearch=()=>{
   if(text?.length>0) {
    dispatch(SearchName(text))
    const textnew=products.filter((item) => {
      return (
        item?.title?.toLowerCase()?.includes(text.toLowerCase())===true
      );
    });
    dispatch(SearchProductList(textnew))
    navigate('/searchproduct')
    setText('')
  }
  }
  // console.log("text",text)
  return (
    <div className="search">
            <input type="text" placeholder="Search" value={text} onChange={(e)=>setText(e.target.value)} onKeyUp={handleKeyPress}></input>
            <AiOutlineSearch onClick={handleSearch} />
            {/* {console.log("object",filteredProducts)} */}
          </div>
  )
}
function Header() {
  //header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6 "} fixed w-full z-10 transition-all`}
    >
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
              <Link
                key={index}
                to={navigation.path}
                className="mr-5 hover:text-gray-900"
              >
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
}

export default Header;
