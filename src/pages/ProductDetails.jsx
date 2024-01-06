import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <svg className="animate-spin -ml-1 mr-3 h-16 w-h-16 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </section>
    );
  }

  const {
    title,
    price,
    description,
    image,
  } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 flex items-center">
      <div className="container mx-auto nb-8 lg:mb-0">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt={title} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px]">{title}</h1>
            <div className="text-red-500 text-xl font-medium mb-6">
              R$
              {(price * 4).toFixed(2)}
            </div>
            <div className="mb-8">{description}</div>
            <button
              className="bg-primary text-white py-4 px-8 hover:bg-black hover:px-10 rounded-lg transition-all duration-1000"
              onClick={() => addToCart(product, product.id)}
              type="button"
            >
              Adicionar ao Carrinho

            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductDetails;
