import { FiArrowUpRight } from "react-icons/fi";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Home = () => {

  const kpiOptions = [
    {
      heading: "Establish Objectives",
      text: "Specify the Key Performance Indicator (KPI) you aim to achieve. This KPI will serve as the target for the community to collectively pursue. It will be encoded into an ERC20 Token known as a KPI Option. We'll assist you in translating the KPI into blockchain-compatible terms. The payout will be determined by the community's success in reaching the target.",
    },
    {
      heading: "Token Creation",
      text: "To mint KPI Options, collateralize the tokens with your DAO's native token. Any surplus collateral can be returned to the DAO treasury once the KPI Option matures.",
    },
    {
      heading: "Launch",
      text: "Distribute these tokens to community members and other individuals you wish to engage to foster growth and prosperity. Organize campaigns and social activities to motivate your community to continue working towards the goal, emphasizing that the payout is contingent on achieving the objectives.",
    },
  ];
  const tokens = [
    {
      heading: "Define Success",
      text: "Achievement Tokens offer a unique method for DAOs to secure funding from long-term strategic investors without resorting to immediate token sales at a steep discount. This product enables collaboration with tokenholders and DAO members to devise a sales structure that benefits everyone.",
    },
    {
      heading: "Similar to Tokens",
      text: "An Achievement Token is minted and backed by your DAO's native token. It will vest at a predetermined future date and offer an additional bonus to investors only if the price surpasses a certain threshold upon vesting.",
    },
    {
      heading: "Fundraising",
      text: "The DAO then offers these Achievement Tokens to investors who share aligned interests in supporting your community or project's growth and success. The success contract is facilitated by UMA's optimistic oracle, which can provide insight into the asset's price at maturity.",
    },
  ];

  return (
    <div id="top" className="w-full bg-[#121212] relative text-[#E1E1E1]">
      <Header />
      <div className="w-full lg:px-40 px-10 h-[calc(100vh-7rem)] flex flex-col items-center justify-center">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center">
          We empower your DAO to achieve positive outcomes.
        </h1>
        {/* <h4 className="text-xl mt-5 text-[#828282]">
          Powered by <span className="font-extrabold">UMA</span>
        </h4> */}
      </div>
      <div id="kpioptions" className="w-full pt-28 lg:px-52 px-10">
        <h3 className="lg:text-2xl text-xl font-semibold mt-6 text-center">
          KPI Pptions
        </h3>
        <h1 className="lg:text-3xl md:text-xl sm:text-xl text-sm lg:mt-5 md:mt-5 text-center">
          Unify your DAO community towards <br className="lg:block hidden" /> a
          shared objective.
        </h1>
        <div className="w-full flex flex-col gap-20 py-20">
          {kpiOptions.map((item) => (
            <div
              key={item.heading}
              className="w-full flex flex-col lg:items-start items-center lg:text-start text-center"
            >
              <h1 className="lg:text-3xl md:text-2xl text-xl relative after:content-[''] after:w-full after:bg-white after:rounded-full after:h-1 after:absolute after:-bottom-6 after:left-0">
                {item.heading}
              </h1>
              <p className="lg:mt-16 mt-10 text-[#828282] lg:text-lg md:text-lg text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-semibold">
          Need Assistance?
        </h1>
        <h3 className="lg:text-xl lg:font-semibold mt-6 text-center px-6 lg:px-0">
          Whether it's defining KPIs or strategizing distribution, we're here to
          support <br className="hidden lg:block" /> your success.
        </h3>
        <div className="flex gap-2 mt-10">
          <button className="font-semibold lg:text-lg text-sm relative lg:px-8 px-5 lg:py-3 py-2 rounded-md border-2 border-[#E1E1E1] after:content-[''] after:w-full after:h-full after:absolute after:-top-full after:bg-white after:left-0 overflow-hidden transition-all duration-500 hover:text-[#1F1F1F] after:rounded-[50%] after:transition-all after:duration-500 hover:after:top-0 hover:after:rounded-none">
            <span className="relative z-20">Reach out</span>
          </button>
          <button className="font-semibold lg:text-lg text-sm lg:px-8 px-5 lg:py-3 py-2 flex gap-2 items-center  bg-white text-[#1F1F1F] rounded-md border-2 after:content-[''] after:w-full after:h-full after:absolute after:-bottom-full after:bg-[#1F1F1F] relative after:left-0 overflow-hidden transition-all duration-500 after:rounded-[50%] after:transition-all after:duration-300 hover:after:-bottom-2/3 ">
            Docs <FiArrowUpRight />
          </button>
        </div>
      </div>
      <div
        id="successtokens"
        className="w-full min-h-screen pt-28 lg:px-52 px-10"
      >
        <h3 className="lg:text-2xl text-xl font-semibold mt-6 text-center">
          Achievement Tokens
        </h3>
        <h1 className="lg:text-3xl md:text-xl sm:text-xl text-sm lg:mt-5 md:mt-5 text-center">
          Secure investments for your DAO <br className="lg:block hidden" />{" "}
          from strategic backers
        </h1>
        <div className="w-full flex flex-col gap-20 py-20">
          {tokens.map((item) => (
            <div
              key={item.heading}
              className="w-full flex flex-col lg:items-start items-center lg:text-start text-center"
            >
              <h1 className="lg:text-3xl md:text-2xl text-xl relative after:content-[''] after:w-full after:bg-white after:rounded-full after:h-1 after:absolute after:-bottom-6 after:left-0">
                {item.heading}
              </h1>
              <p className="lg:mt-16 mt-10 text-[#828282] lg:text-lg md:text-lg text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
