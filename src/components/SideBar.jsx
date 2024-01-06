import { useContext } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash } from 'react-icons/fi';
import CartItem from './CartItem';
import { SideBarContext } from '../contexts/SideBarContext';
import { CartContext } from '../contexts/CartContext';

function SideBar() {
  const {
    isOpen,
    handleClose,
  } = useContext(SideBarContext);

  const {
    cart,
    clearCart,
    itemAmount,
    totalPrice,
  } = useContext(CartContext);
  const handleClick = ((e) => {
    e.preventDefault();
    if (cart.length !== 0) {
      const message = (
        `Olá, eu gostaria de comprar ${cart.map((item) => (
          `${item.amount} unidades de ${item.title}`
        ))} com um valor total de R$ ${totalPrice}.`);
      const number = 99999999999;
      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=${number}&text=${message}`;
      window.open(url, '_blank');
    } else {
      const number = 99999999999;
      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=${number}&text=Olá, estão funcionando?`;
      window.open(url, '_blank');
    }
  });
  return (
    <div
      className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 z-20 md:h-full px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">{`Shopping Bag(${itemAmount})`}</div>
        <div onClick={handleClose} className="cursor-pointer w-8 flex justify-center items-center">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div
        className="flex flex-col gap-y-2 h-[480px] lg:h-[680px] overflow-y-auto overflow-x-hidden border-b"
      >
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex justify-between w-full items-center">
          <div className="font-semibold uppercase">
            <span>Total:</span>
            {' '}
            {`R$${totalPrice}`}
          </div>
          <div
            onClick={() => clearCart()}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash />
          </div>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="bg-primary flex p-4 mt-4 justify-center items-center text-white w-full font-medium"
        >
          Finalizar compra
        </button>

      </div>
    </div>
  );
}

export default SideBar;
