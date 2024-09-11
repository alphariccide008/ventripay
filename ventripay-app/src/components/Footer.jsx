import { footerIcon } from "../assets/icons";
import { footerLinks, socialMedia } from "../data";

const Footer = () => {
  return (
<footer className="max-container bg-[#003366] px-12 py-6 divide-y divide-zinc-500 mb-3">
<div className="flex flex-wrap items-start max-sm:gap-10 max-md:gap-5 max-lg:flex-col ">
        <div className="flex items-center max-sm:mx-auto mt-6 xl:ml-6">
          <img src={footerIcon} alt="logo" width={50} height={50} />
          <div className="flex flex-col ml-3">
            <p className="text-white mt-4">ventripay</p>
            <p className="text-white leading-4 mt-2 ">
              shaping the future of crossborder <br />
              payment in africa.
            </p>
          </div>
         
        </div>
        

        <div className="flex max-sm:flex-col max-sm:text-center max-sm:gap-10 mx-auto lg:gap-40 gap-20 flex-wrap mt-8">
          {footerLinks.map((footer) => {
            return (
              <div key={footer.title}>
                <h4 className="text-[#FF6600] font-semibold mb-5 uppercase">{footer.title}</h4>
                <ul>
                  {footer.links.map((link) => (
                    <li key={link.name} className="text-white mb-4">
                      <a href="#">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {/* <hr className="border-zinc-300 w-full mt-4" /> */}

      <div className="flex flex-col xl:flex-row justify-between items-center ">
        <div className="flex">
          {socialMedia.map((icon, index) => {
            return (
              <div className="" key={index}>
                <img src={icon.src} alt="" width={100} height={100} />
              </div>
            );
          })}
        </div>
        <div>
          <p className="text-lg text-white">copyright &copy;2024 ventripay</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
