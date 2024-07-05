const Footer = () => {
  return (
    <footer className="w-full px-5 py-2 z-40 bg-black">
      <ul className="flex justify-between flex-col-reverse sm:flex-row">
        <li className="mt-5 flex justify-center items-end sm:mt-0">
          <span className="font-custom text-gray-600 tracking-tight cursor-pointer text-base">
            &#169;2024
          </span>
        </li>
        <li className="flex justify-center items-end">
          <a
            className="font-custom text-aquatic tracking-tight cursor-pointer text-base opacity-80 hover:opacity-30"
            href="https://www.youtube.com/@SeanDonny333"
            target="_blank"
          >
            YouTube
          </a>
          <a
            className="font-custom text-aquatic tracking-tight cursor-pointer text-base ml-6 sm:ml-9 md:ml-12 lg:ml-4 opacity-80 hover:opacity-30"
            href="https://instagram.com/sean.donny"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="font-custom text-aquatic tracking-tight cursor-pointer text-base ml-6 sm:ml-9 md:ml-12 lg:ml-4 opacity-80 hover:opacity-30"
            href="mailto:seandonny333@gmail.com"
            target="_blank"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
