import React, { useContext, useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { SideBarContext } from '../contexts/SideBarContext';
import { CartContext } from '../contexts/CartContext';
import LogoLoja from '../img/logo.svg';
import Logo from './Logo';

function Header() {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => (window.scrollY > 60 ? setIsActive(true) : setIsActive(false)));
  });

  return (
    <header className={`
    ${isActive ? 'bg-white py-6 shadow-lg' : 'bg-none py-4'} 
    fixed top-0 w-full transition-all 
    z-10 duration-1000`}
    >
      <div className="container flex mx-auto items-center justify-between h-full">
        <Link to="/">
          <div className="flex items-end">
            <img className="w-[40px]" src={LogoLoja} alt="Logo da Loja" />
            <Logo color="text-black" />
          </div>
        </Link>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] h-[18px] w-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
