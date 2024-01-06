import React from 'react';
import { Link } from 'react-router-dom';
import WomanImg from '../img/woman_hero.png';

function Hero() {
  return (
    <section className="bg-hero h-[800px] bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3" />
            Nova Tendência
          </div>
          <h1 className="md:text-[70px] text-[60px] leading-[1.1] font-light mb-4">
            Promoção de Outono
            {' '}
            <br />
            <span className="font-semibold">Mulheres</span>
          </h1>
          <Link
            className="self-start uppercase font-semibold"
            to="/"

          >
            Descubra mais
            <div className="w-10 h-[3px] bg-primary hover:w-32 transition-all duration-1000" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="Modelo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
