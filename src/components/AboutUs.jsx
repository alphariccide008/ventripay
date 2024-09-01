import Button from "./Button";

const AboutUs = () => {
  return (
    <section className="px-8 sm:py-12 py-8">
      <div className="max-container w-full flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl uppercase mb-6">about us</h1>
        <p className="text-center text-[15px] lg:text-[18px] mb-6">
          With VentriPay, you can pay utility bills , Create virtual cards for
          secure and seamless
          <br />
          transactions. Join the evolution and discover a smarter way to manage
          your finances in
          <br />
          Africa. Sign up now and start enjoying the benefits of fast, secure
          and affordable
          <br />
          transactions!
        </p>
        <div>
          <Button label="Learn More" />
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
