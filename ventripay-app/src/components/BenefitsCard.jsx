
const BenefitsCard = ({title,desc}) => {
  return (
    <div className="text-center bg-white lg:py-4 lg:px-6 px-5 py-5 rounded-lg max-sm:w-80">
        <h3 className="mb-3 text-md uppercase font-semibold">{title}</h3>
        <p className="text-sm uppercase">{desc}</p>
    </div>
    
  )
}
export default BenefitsCard