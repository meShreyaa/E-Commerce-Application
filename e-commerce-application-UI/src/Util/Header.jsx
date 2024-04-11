import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/A1.jpg';
import SearchBar from '../Components/SearchBar';
import image2 from '../images/A2.jpg';
import im1 from '../images/D1.jpg'
import im2 from '../images/D2.jpg'
import im3 from '../images/D3.jpg'
import im4 from '../images/D4.jpg'
import im5 from '../images/D5.jpg'
import im6 from '../images/D6.jpg'
const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='flex items-center justify-around bg-white text-slate-100 py-2 text-xl text-center align-middle shadow-xl'>
      <div className='translate-x-90'>
        <Link to={"/"}>
          <img src={image1} alt='A1' height={40} width={100}/>
        </Link>
      </div>
      <div>
        
          <SearchBar onChange={handleSearchChange}/>
       
      </div>
      <div className="relative">
        <button onMouseOver={toggleDropdown} className='text-black h-10 w-30 px-4 bg-white rounded-md focus:outline-none hover:bg-blue-600 hover:text-white 
        hover:<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"  height={25} width={25}/>'>
        <span className="flex items-center">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" height={25} width={25} />&nbsp;&nbsp;
                  Login
                </span>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <div className='flex flex-col gap-2'>
              <Link to={"/register"} className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
              <Link to={"/login"}>Login?</Link> &nbsp;  <span className='text-blue-600'> Sign Up</span>
              </Link><hr/>
              <Link to={"/register"} className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
                <span className="flex items-center">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" height={20} width={20} />&nbsp;&nbsp;
                  My Profile
                </span>
              </Link>
              <Link to={"/register"} className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
                <span className="flex items-center">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="" height={20} width={20} />&nbsp;&nbsp;
                  Flipkart Plus Zone
                </span>
              </Link>
              <Link to={"/register"} className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
                <span className="flex items-center">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="" height={20} width={20} />&nbsp;&nbsp;
                  Orders
                </span>
              </Link>
              <Link to={"/register"} className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
                <span className="flex items-center">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="" height={20} width={20} />&nbsp;&nbsp;
                  Wishlist
                </span>
              </Link>
              <Link to={"/register"} className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
                <span className="flex items-center">
          <img src={im5} alt="" height={16} width={16} />&nbsp;&nbsp;
                  Rewards
                </span>
              </Link>
              <Link to={"/register"} className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
                <span className="flex items-center">
          <img src={im6} alt="" height={16} width={16} />&nbsp;&nbsp;
                  Gift Cards
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Link to={"/cart"} className='text-black'>Cart</Link>
      <Link to={"/seller1"} className='text-black'>Become a Seller</Link>
    </div>
  );
};

export default Header;
