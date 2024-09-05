import { features } from "../data"
import FeaturesCard from "./FeaturesCard"

const Features = () => {
  return (
    <section className="px-8 sm:py-12 py-4">
        <div className="flex flex-col justify-center items-center max-container w-full">
            <div className="max-sm:px-8 px-16 mb-6">
                <h1 className="text-4xl uppercase text-center">all access in one features</h1>
                 <hr className="w-44 mx-auto border-[#008080] " />
            </div>
            <div className="max-sm:px-8 px-16">
                <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {
                      features.map((feature)=>(
                        <FeaturesCard key={feature.desc} {...feature}/>
                      ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
export default Features