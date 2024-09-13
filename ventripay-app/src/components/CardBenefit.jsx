
const CardBenefit = ({icon, label}) => {
  return (
    <div className="flex items-center gap-2
     bg-[#008080] rounded-lg py-6 px-5 ">
        <img src={icon} alt="" width={50} />
        <p className="text-white text-md uppercase">{label}</p>
    </div>
  )
}
export default CardBenefit