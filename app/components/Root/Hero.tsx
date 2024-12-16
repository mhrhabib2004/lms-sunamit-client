import Image from "next/image";

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-violet-50 to-orange-50">
      {/* BG Image */}
      {/* <Image 
      src="https://plus.unsplash.com/premium_photo-1683121696175-d05600fefb85?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Background Image"
      layout="fill"
      className="absolute -z-10 inline-block h-full w-full object-cover opacity-75"
    />  */}

      {/* Container */}
      <div className="mx-auto w-full max-w-7xl  dark:bg-black px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Heading Content */}
          <div className="max-w-[720px]">
            <h1 className="mb-3 pb-4 text-4xl font-bold text-green-700 dark:text-white md:text-6xl">
              Improve Your Online Lerning Exprience Better Instantly
            </h1>
            <p className="mb-6 max-w-[528px] text-black dark:text-white text-xl md:mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            {/* serch ber */}
            <div className="w-full max-w-md mb-3 ">
              <form className="flex items-center  border-gray-300 dark:text-white text-black">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border-2 outline-none focus:border-blue-500"
                />
                <button
                  
                  className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
                >
                  Search
                </button>
              </form>
            </div>

            <div className="flex items-center">
              <a
                href="#"
                className="flex max-w-full flex-row rounded-full border border-solid border-[#636262] px-6 py-4 font-bold"
              >
                <p>View Showreel</p>
              </a>
            </div>
          </div>

          {/* Image Div */}
          <div>
            <Image
              src="https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero Image"
              width={640} // Define a fixed width
              height={640} // Define a fixed height
              className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
