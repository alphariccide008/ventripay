import { cardBenefits } from "../data";
import Button from "./Button";
import CardBenefit from "./CardBenefit";
import {sectionImg} from "../assets/images"

const CardBenefits = () => {
  return (
    <section className="px-8 sm:py-12 py-4 bg-cover sm:bg-middle md:bg-center xl:bg-right-top"
      style={{backgroundImage: `url(${sectionImg})`}}>
      <div className="max-container w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl mb-8 xl:mb-12 uppercase text-center text-white">
          virtual card benefits
          <span className="block">
          <hr className="w-44 mx-auto border-white " />
          </span>
        </h1>

        <div className=" grid grid-cols lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-8 mb-8">
          {cardBenefits.map((card) => (
            <CardBenefit key={card.label} {...card} />
          ))}
        </div>
        <Button label="Learn More" />
      </div>
    </section>
  );
};
export default CardBenefits;
