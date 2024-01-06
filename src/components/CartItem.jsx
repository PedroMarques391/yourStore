import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

function CartItem({ item }) {
  const {
    id, title, image, price, amount,
  } = item;
  const { removeFromCart, incrementAmount, decrementAmount } = useContext(CartContext);
  return (
    <section className="flex gap-x-4 py-2 lg:px=6 border-b border-gray-200 w-full font-light text-gray-500  ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/products/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm uppercase font-primary font-medium max-w-[240px] hover:underline"
              to={`/products/${id}`}
            >
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)} className="text-2xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div
            className="flex gap-x-2 h-[36px] text-sm"
          >
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div onClick={() => decrementAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer h-full">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">{amount}</div>
              <div onClick={() => incrementAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 justify-around items-center">
              {`R$ ${parseFloat(price * 4).toFixed(2)}`}
            </div>
            <div className="flex flex-1 justify-end items-center text-primary font-medium">
              {`R$ ${parseFloat((price * 4) * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartItem;
