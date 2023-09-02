import img1 from "../../assets/logoNegro.webp";

const Loader = () => {
  return (
    <div className="flex items-center space-x-2 h-screen justify-center">
      <img
        src={img1}
        alt="logo"
        className="inline-block h-16 w-h-16 animate-pulse align-[-0.125em] text-gray-900 motion-reduce:animate-[pulse_2.5s_linear_infinite]"
      />
    </div>
  );
};
export default Loader;
