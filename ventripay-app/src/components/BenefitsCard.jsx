
const BenefitsCard = ({title,desc}) => {
  return (
    <div className="text-center bg-white lg:py-4 lg:px-6 px-5 py-5 rounded-lg">
        <h3 className="mb-3 text-[16px] uppercase font-semibold">{title}</h3>
        <p>{desc}</p>
    </div>
    
  )
}
export default BenefitsCard