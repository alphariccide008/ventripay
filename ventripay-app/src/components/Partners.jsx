import { trustedIcons } from "../data";
import Button from "./Button";
import PartnersCard from "./PartnersCard";


const Partners = () => {
  return (
    <>
      <section className="px-8 sm:py-12 py-4">
        <div className="flex max-lg:flex-col justify-between  gap-10 w-full max-container ">
          <div className="flex flex-col max-sm:px-8 px-16">
            <h1 className="lg:max-w-lg text-2xl uppercase">
              want to partner with us?
              <br />
              let’s explore the future together
            </h1>
            <div className="mt-4 uppercase">
              <Button label="Get Started" />
            </div>
          </div>
          <div className="max-sm:px-8 px-16 flex flex-col ">
            <h1 className="lg:max-w-lg text-2xl mb-5 uppercase">
              trusted partners
            </h1>
            <div className="flex items-center gap-4">
            {
              trustedIcons.map((item)=>(
                <PartnersCard key={item.name} {...item} />
              ))
            }
            </div>
            
          </div>
        </div>
      </section>
      <hr/>
    </>
  );
};
export default Partners;
