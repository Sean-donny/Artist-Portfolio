import { useEffect, useContext } from 'react';
import { Poster } from '../../interfaces/Poster';
import richPosterData from './data';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import toast from 'react-hot-toast';
import SEO from '../../components/SEO/SEO';
import seoImage from '/optimised/16x20_fashion_roadman.webp';

const Store = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(`/store/${path}`);
  };

  const posters: Poster[] = Object.values(richPosterData);

  // Post Checkout flow
  const { clearCart } = useContext(CartContext)!;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');

    if (!status) return;

    if (status === 'success') {
      clearCart();

      toast.custom(t => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="/optimised/sean_donny_skull_logo.webp"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">Thank you!</p>
                <p className="mt-1 text-sm text-gray-500">
                  Your order is now being processed!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-zima hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }

    if (status === 'cancel') {
      params.set('cart', 'open');

      toast.error('Checkout was cancelled.');
    }

    params.delete('status');
    navigate(`${window.location.pathname}?${params.toString()}`, {
      replace: true,
    });
  }, [clearCart, navigate]);

  return (
    <div className="store-gallery-container w-full h-full overflow-hidden relative store-page bg-zima">
      <SEO
        title="Store"
        description="Explore a Web Store of works by artist Sean Donny."
        type="article"
        url="https://seandonny.com/store"
        image={seoImage}
      />
      <div className="store-standard-view max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 py-8 overflow-visible">
        {/* Store Header */}
        <div className="mb-8 mt-4">
          <h1 className="text-3xl font-normal text-slate-100 mb-2 font-loud drop-shadow-sm">
            Prints
          </h1>
          <p className="text-slate-100 font-custom text-sm drop-shadow-sm">
            Discover a collection of high quality posters
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posters.map((poster, i) => (
            <div
              key={i}
              className="group overflow-hidden flex flex-col items-center justify-center text-slate-100 hover:underline"
            >
              {/* Product Image Container */}
              <div
                className="standard-store-image shadow-md hover:shadow-lg transition-shadow duration-300 "
                onClick={() => {
                  handleNavigate(poster.slug);
                }}
              >
                <motion.img
                  className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
                  tabIndex={0}
                  role="button"
                  aria-label={`View poster ${poster.title}`}
                  src={poster.src}
                  alt={poster.title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  width={poster.width}
                  height={poster.height}
                  decoding="async"
                />
              </div>

              {/* Product Info */}
              <div className="py-4">
                <h3 className="text-lg font-semibold text-slate-100 mb-2 line-clamp-2 font-custom drop-shadow-sm cursor-pointer">
                  {poster.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
