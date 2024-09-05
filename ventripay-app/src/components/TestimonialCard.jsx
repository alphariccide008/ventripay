
export const TestimonialCard = ({icon, quote}) => {
  return (
    <div className="flex flex-col gap-4 justify-center border-2 border-[#008080] rounded-lg py-5 px-5 ">
        <img src={icon} 
        width={50}
        height={50}
        alt="icon" />
        <div>
            <p>{quote}</p>
        </div>
    </div>
  )
}