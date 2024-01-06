import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center md:items-start flex-col md:flex-1 text-white">
          <Link to="/" className="p-2 text-lg font-medium"><Logo color="text-pink-300" /></Link>
          <p className="p-2 md:text-lg font-bold">Encontre a Gente</p>
          <p className="p-2 md:text-lg font-medium">Av. Alcindo Cacela, 2240 - Cremação</p>
          <p className="p-2 md:text-lg font-medium">Belém - PA, 66040-000</p>
          <h1 className="p-2 md:text-lg font-bold uppercase">Horário de Funcionamento</h1>
          <p className="p-2 md:text-lg font-medium">Segunda a Sexta, das 8h às 18h</p>
          <p className="p-2 md:text-lg font-medium">Sábado, das 8h às 18h</p>

        </div>
        <div className="mt-5 md:mt-0 md:flex-1 flex-col justify-between items-center text-center text-white">
          <Link to="/"><Logo color="text-white" /></Link>
          <p className="my-14 text-xl"> &copy; YourStore 2024</p>
          <p className="mt-4">Todos os Direitos reservados</p>
        </div>
        <div className="md:flex-1 flex justify-around text-white text-3xl items-center w-full p-5 mt-5 md:mt-0">
          <p><FaFacebookF /></p>
          <p><FaInstagram /></p>
          <p><RiTwitterXFill /></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
