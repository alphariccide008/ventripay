

const Newsletter = () => {
  return (
    <section className="max-container flex flex-col justify-center items-center py-5">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl uppercase mb-2 text-center">join our newsletter</h1>
            <p className="max-sm:max-w-sm text-center text-md leading-7 uppercase mb-2 px-12">get latest news, updates, and special offers delivered straight to your inbox</p>
        </div>
        <div className="flex max-sm:flex-col max-sm:w-[60%] max-sm:gap-4 ">
            <div>
                <input type="text" placeholder="Enter you Email" className="border-2 border-[#003366] max-sm:w-full py-4 max-sm:rounded-lg rounded-l-lg w-full placeholder:text-center" />
            </div>
           <button  className="text-white bg-[#003366] w-28 max-sm:w-full max-sm:py-4 max-sm:rounded-lg rounded-r-lg">Subscribe</button>
            
        </div>
    </section>
  )
}
export default Newsletter