const Loader = () => {
  return (
    <div className="h-screen relative top-2/4 right-2/4 left-2/4">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-gray-900 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
    // <div
    //   aria-label="Loading..."
    //   role="status"
    //   className="flex items-center space-x-2 h-screen justify-center"
    // >
    //   <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
    //     <line
    //       x1="128"
    //       y1="32"
    //       x2="128"
    //       y2="64"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       stroke-width="24"
    //     ></line>
    //     <line
    //       x1="195.9"
    //       y1="60.1"
    //       x2="173.3"
    //       y2="82.7"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       stroke-width="24"
    //     ></line>
    //     <line
    //       x1="224"
    //       y1="128"
    //       x2="192"
    //       y2="128"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       stroke-width="24"
    //     ></line>
    //     <line
    //       x1="195.9"
    //       y1="195.9"
    //       x2="173.3"
    //       y2="173.3"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       stroke-width="24"
    //     ></line>
    //     <line
    //       x1="128"
    //       y1="224"
    //       x2="128"
    //       y2="192"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       stroke-width="24"
    //     ></line>
    //     <line
    //       x1="60.1"
    //       y1="195.9"
    //       x2="82.7"
    //       y2="173.3"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       stroke-width="24"
    //     ></line>
    //     <line
    //       x1="32"
    //       y1="128"
    //       x2="64"
    //       y2="128"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       stroke-width="24"
    //     ></line>
    //     <line
    //       x1="60.1"
    //       y1="60.1"
    //       x2="82.7"
    //       y2="82.7"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       stroke-width="24"
    //     ></line>
    //   </svg>
    //   <span className="text-4xl font-medium text-gray-500">Cargando...</span>
    // </div>
  );
};
export default Loader;
