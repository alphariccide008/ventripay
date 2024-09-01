

const PartnersCard = ({ icon, name }) => {
  return (
      <div className="flex items-center gap-2">
        <img src={icon}
         alt="icon" 
         height={50}
         width={50}
         />
        <p>{name}</p>
      </div>

  );
};
export default PartnersCard;
