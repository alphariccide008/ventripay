
const FeaturesCard = ({icon,desc}) => {
  return (
    
    <div className="flex flex-col justify-center items-center gap-2">
        <img src={icon}
         alt={desc}
         className="bg-[#008080] object-cover py-4 px-4 rounded-full w-12"
        
         />
        <div>
         <p className="text-sm">{desc}</p>
        </div>
    </div>

    
  )
}
export default FeaturesCard