import { testimonials } from "../data"
import Button from "./Button"
import { TestimonialCard } from "./TestimonialCard"

const Testimonials = () => {
  return (
    <section className="px-20 lg:px-10 sm:py-12 py-8 sm:mx-24 ">
        <div className="max-container w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl uppercase mb-5">testimonials</h1>
                <p className="text-lg uppercase mb-5">get to know our clients</p>
            </div>
            <div className=" grid grid-cols lg:grid-cols-3 gap-8 mb-5">
                {
                    testimonials.map((testimonial)=>(
                        <TestimonialCard key={testimonial.quote} {...testimonial}/>
                    ))
                }
            </div>
            <Button label="View More"/>
        </div>
    </section>
  )
}
export default Testimonials