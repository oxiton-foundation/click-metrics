import HeroImg from "../../assets/n4.png";

const Hero = () => {
  return (
    <main className="w-full flex">
      <section className="flex justify-between w-[95%] items-center mx-auto mt-[5%]">
        <div className="w-[45%] flex flex-col">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">Bulding stronger digital </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-purple-500 ">
            connections
          </h1>
          {/* <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            The People of the Kingdom
          </h2> */}
          <h3 className="scroll-m-20 text-xl tracking-tight shadow-xs">
            Use our URL shortener, QR Codes, and Link-in-bio pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the 'Click-Mate' Platform
          </h3>
        </div>
        <div className="w-1/2 items-center justify-center">
          <img src={HeroImg} className="w-[100%] h-[30rem] mx-auto shadow-lg shadow-slate-500" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
