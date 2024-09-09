
const CardBenefit = ({icon, label}) => {
  return (
    <div className="flex items-center gap-2
     bg-[#008080] rounded-lg py-6 px-5 ">
        <img src={icon} alt="" />
        <p className="text-white text-xl uppercase">{label}</p>
    </div>
  )
}
export default CardBenefit