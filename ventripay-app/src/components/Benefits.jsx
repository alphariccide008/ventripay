import BenefitsCard from "./BenefitsCard"

const Benefits = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center">
            <h1 className="uppercase">benefits of choosing ventripay</h1>
            <div className="flex flex-col justify-center items-center mb-4">
                
                    <BenefitsCard/>
                

            </div>
        </div>
    </section>
  )
}
export default Benefits