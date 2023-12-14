import loader from '/optimised/loading_gif.gif';

const Loader = () => {
  return (
    <div className="w-screen h-screen fixed inset-0 z-30 bg-black flex items-center justify-center">
      <img src={loader} />
    </div>
  );
};

export default Loader;
