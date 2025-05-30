import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PosterSize } from '../../../interfaces/Poster';
import richPosterData from '../data';
import { CartItem } from '../../../interfaces/CartItem';
import { shuffleArray } from '../../../utils/ShuffleArray';
import { useCart } from '../../../context/useCart';
import toast from 'react-hot-toast';
import { CartContext } from '../../../context/CartContext';
import SEO from '../../../components/SEO/SEO';

const Product = () => {
  // Post Checkout flow
  const { clearCart } = useContext(CartContext)!;

  useEffect(() => {
    const handleOpenCart = () => {
      const params = new URLSearchParams(location.search);
      params.set('cart', 'open');
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    };
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');

    if (status === 'success') {
      // ✅ Clear the cart
      clearCart();

      // ✅ Show confirmation toast/message
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
                  src="/optimised/sean_donny_skull_logo.png"
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
      // Optional: open cart panel again
      handleOpenCart;

      toast.error('Checkout was cancelled.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // End of Post checkout flow

  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(`/${path}`);
  };
  const { setCart } = useCart();
  const { slug } = useParams();

  const poster = richPosterData[slug as string];

  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<PosterSize>('A4');
  const min = 1;
  const max = 1000;

  if (!poster) return <div className="text-white p-6">Poster not found.</div>;

  const selectedSizeData = poster.sizes[size];
  const dimensionMap = {
    A4: '8.3 x 11.7 inches',
    '16x20': '16 x 20 inches',
    A2: '16.5 x 23.4 inches',
  };
  const dimensions = dimensionMap[size];

  const clamp = (val: number) => Math.max(1, Math.min(1000, val));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseInt(e.target.value, 10);
    setQuantity(isNaN(parsed) ? NaN : clamp(parsed));
  };

  const increment = () =>
    setQuantity(prev => clamp((isNaN(prev) ? 1 : prev) + 1));
  const decrement = () =>
    setQuantity(prev => clamp((isNaN(prev) ? 1 : prev) - 1));

  const handleCartAddition = () => {
    const safeQuantity = isNaN(quantity) ? 1 : quantity;
    const cartKey = 'sean-donny-shopping-cart';
    const existingCart = localStorage.getItem(cartKey);
    let cart: CartItem[] = existingCart ? JSON.parse(existingCart) : [];

    let foundMatch = false;
    cart = cart.map(item => {
      if (item.title === poster.title && item.size === size) {
        foundMatch = true;
        return {
          ...item,
          quantity: item.quantity + safeQuantity,
        };
      }
      return item;
    });

    if (!foundMatch && selectedSizeData) {
      cart.push({
        title: poster.title,
        size,
        quantity: safeQuantity,
        price: selectedSizeData.price,
        stripePriceId: selectedSizeData.stripePriceId,
        thumbnail: poster.src,
      });
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    setCart(cart); // Update the cart context state immediately

    // console.log('Cart updated:', cart);
  };

  const otherPosters = Object.values(richPosterData).filter(
    p => p.slug !== slug,
  );
  const shuffled = shuffleArray(otherPosters);
  const recommended = shuffled.slice(0, 4);

  return (
    <div className="product-page-container w-full h-auto bg-zima flex flex-col">
      <SEO
        title={`Store | ${poster.title}`}
        description={`Explore a painting of ${poster.title} by artist Sean Donny.`}
        type="article"
        url={`https://seandonny.com/store/${poster.slug}`}
        image={poster.src}
      />
      <div className="product-wrapper w-full h-full max-w-7xl m-auto flex flex-col lg:flex-row relative pt-24">
        {/* Images: Carousel on small, column on large */}
        <div className="product-images w-full lg:w-1/2 overflow-x-auto lg:overflow-visible px-6 md:px-12 flex snap-x snap-mandatory lg:flex-col lg:snap-none scrollbar-hide">
          <img
            className="product-image snap-center shrink-0 lg:w-full object-contain"
            src={poster.src}
            width={poster.width / 1.5}
            height={poster.height / 1.5}
            loading="lazy"
            alt={poster.description}
          />
          <img
            className="product-a4-shipping snap-center shrink-0 lg:w-full object-contain"
            src="/optimised/a4_shipping.gif"
            width={poster.width / 1.5}
            height={poster.width / 1.5}
            loading="lazy"
            alt="A4 shipping animation"
          />
          <img
            className="product-non-a4-shipping snap-center shrink-0 lg:w-full object-contain"
            src="/optimised/a2_shipping.gif"
            width={poster.width / 1.5}
            height={poster.width / 1.5}
            loading="lazy"
            alt="A2 shipping animation"
          />
        </div>
        <div className="product-info-container w-full max-w-lg h-auto pb-40 lg:pb-0 px-6 md:pl-12 lg:w-1/2 lg:h-[660px] lg:max-w-lg lg:sticky lg:top-0 lg:right-0 text-slate-100 font-custom lg:pr-12">
          {/* Product Info */}
          <h1 className="product-title font-loud text-massive2">
            {poster.title}
          </h1>
          <p className="product-price text-2xl mb-4">
            £{selectedSizeData?.price.toFixed(2)}
          </p>
          {/* Size Options */}
          <div className="mb-6">
            <p className="text-sm mb-2">Size</p>
            <div className="flex gap-4">
              {(['A4', '16x20', 'A2'] as PosterSize[]).map(opt => (
                <button
                  key={opt}
                  aria-label={`Select ${opt}`}
                  onClick={() => {
                    setSize(opt);
                  }}
                  className={`rounded-full px-4 h-12 bg-black text-white transition ring-2 ${
                    size === opt ? 'ring-white' : 'ring-transparent'
                  } ${opt === '16x20' ? 'w-20' : 'w-16'}`}
                >
                  {opt === '16x20' ? '16 x 20' : opt}
                </button>
              ))}
            </div>
          </div>
          <div className="product-quantity-options-container w-full h-24 py-2 flex flex-col justify-between">
            <p className="product-quantity-label text-sm">Quantity</p>
            <div className="product-quantity-input-buttons-container w-[9rem] flex border">
              <button
                type="button"
                id="decrement"
                className="product-quantity-input-decrement-button w-12 h-12 p-2 text-center"
                aria-label="Decrease quantity"
                onClick={decrement}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min={min}
                max={max}
                value={isNaN(quantity) ? '' : quantity}
                step={1}
                onChange={handleChange}
                required
                className="product-quantity-input w-12 h-12"
                aria-label="Quantity input"
              />
              <button
                type="button"
                id="increment"
                className="product-quantity-input-increment-button w-12 h-12 p-2 text-center"
                aria-label="Increase quantity"
                onClick={increment}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="product-add-to-cart-button w-full h-12 bg-black p-2 my-4 text-center transition hover:bg-orangutan"
            onClick={handleCartAddition}
          >
            Add To Cart
          </button>
          <div className="product-description-container pt-4">
            <ul className="ml-4 list-disc space-y-2">
              <li className="product-physical-description">
                {dimensions} art print on premium 260gsm inkjet microporous
                photo paper with a semi-gloss satin finish
              </li>
              <li className="product-artwork-description">
                {poster.description}
              </li>
              <li className="product-year-description">
                Painted in {poster.year}
              </li>

              {size === '16x20' && (
                <li className="product-size-additional-description">
                  This one is bigger
                </li>
              )}
              {size === 'A2' && (
                <li className="product-size-additional-description">
                  This one is the biggest
                </li>
              )}
            </ul>
            <div className="product-shipping-description-container flex flex-col justify-between my-4 w-full h-20">
              <p className="product-shipping-description-label text-sm">
                Shipping Info
              </p>
              <p className="product-shipping-description">
                A4 prints come is hand-signed mailers encased in hard mailers.
                <br />
                A2 & 16x20 prints come in hand-signed mailing tubes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* You May Also Like */}
      <div className="recommendations-section mt-24 mb-12 px-6 text-white font-custom">
        <h2 className="text-2xl mb-4">You May Also Like</h2>
        <div className="flex gap-4 flex-wrap items-baseline">
          {recommended.map(p => (
            <div
              key={p.slug}
              className="cursor-pointer hover-flash transition-opacity"
              onClick={() => {
                handleNavigate(`store/${p.slug}`);
              }}
            >
              <img src={p.src} alt={p.title} width={p.width / 6} />
              <p>{p.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
