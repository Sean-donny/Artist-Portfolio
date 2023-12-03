const Footer = () => {
  return (
    <div className="w-full px-5 py-2 z-40 bg-black">
      <ul className="flex justify-between">
        <li>
          <span className="font-custom text-aquatic tracking-tight cursor-pointer text-base opacity-80">
            &#169;2023
          </span>
          <a
            className="font-custom text-aquatic tracking-tight cursor-pointer text-base ml-12 lg:ml-4 opacity-80 hover:opacity-30"
            href="https://github.com/Sean-donny"
            target="_blank"
          >
            By PN
          </a>
        </li>
        <li>
          <a
            className="font-custom text-aquatic tracking-tight cursor-pointer text-base opacity-80 hover:opacity-30"
            href="https://instagram.com/sean.donny"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="font-custom text-aquatic tracking-tight cursor-pointer text-base ml-12 lg:ml-4 opacity-80 hover:opacity-30"
            href="mailto:seandonny333@gmail.com"
            target="_blank"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
