import Button from "./Button";

const AboutUs = () => {
  return (
    <section className="px-8 sm:py-12 py-8">
      <div className="max-container w-full flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl uppercase mb-6">about us</h1>
        <p className="text-center text-md mb-6 leading-6 sm:leading-8 px-4 sm:px-32 xl:px-48 uppercase">
          With VentriPay, you can pay utility bills, Create virtual cards for
          secure and seamless transactions. Join the evolution and discover a
          smarter way to manage your finances in Africa. Sign up now and start
          enjoying the benefits of fast, secure and affordable transactions!
        </p>
        <div>
          <Button label="Learn More" />
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
