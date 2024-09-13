

const PartnersCard = ({ icon, name }) => {
  return (
      <div className="flex w-1/3  items-center px-2 ">
        <div className="w/1-2  ">
        <img src={icon}
         alt="icon" 
         height={70}
         width={50}
         />
        </div>
       <div className="w-1/2 gap-3 pl-1 text-sm">
       <p className="" style={{fontSize:'10px'}}>{name}</p>
       </div>
      </div>

  );
};
export default PartnersCard;
