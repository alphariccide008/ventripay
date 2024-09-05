const Steps = ({ no,icon, label }) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center" >
       <p className="text-white border-b-violet-100 uppercase font-semibold">{no}:</p>
      <img src={icon}
       alt={label}
       width={80}
       height={80}
       className="bg-white px-5 py-5 rounded-full" />
      <div className="flex flex-row items-center ">
        <p className="text-white">{label}</p>
      </div>
    </div>
  );
};
export default Steps;
