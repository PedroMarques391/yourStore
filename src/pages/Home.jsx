import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

function Home() {
  const { products } = useContext(ProductContext);

  const filterProducts = products.filter((item) => item.category === "men's clothing"
  || item.category === "women's clothing");

  return (
    <section>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {filterProducts && filterProducts.map((product) => (
              <Product key={product.id} product={product} />

            ))}

          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
