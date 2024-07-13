const GoogleMap = () => {
  return (
    <section className="my-20 lg:my-28 px-3  min-h-[600px] max-w-screen-xl mx-auto">
      <div className="mb-10 max-w-2xl mx-auto space-y-2">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl text-gray-800 font-bold text-center font-young-serif"
        >
          Our Location
        </h2>
        <p className="text-gray-600 text-center">
          Visit us at 123 Adventure Lane, Campersville. Explore our extensive
          range of camping gear and get personalized advice from our expert
          team. We're here to enhance your outdoor adventures!
        </p>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="w-full h-52 md:h-auto lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              style={{ filter: "contrast(1.2) opacity(1)" }}
              className="border-0 rounded-lg w-full h-full absolute inset-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36825.2395856369!2d90.42018539379434!3d23.69287532435544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7168955db05%3A0x721be1908413d097!2sRafiqul%20Islam%20School%20%26%20College!5e0!3m2!1sen!2sbd!4v1720719374781!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bg-white relative hidden md:flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  123 Campers Lane, Adventure City, CA 90210
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-green-500 leading-relaxed"
                  href="mailto:example@email.com"
                >
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We value your opinion and want to hear from you. Share your
              thoughts, suggestions, or concerns with us to help us improve.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Help us enhance your experience with us!
            </p>
          </div>
        </div>
      </section>
      {/* <div className="flex flex-col-reverse md:flex-row justify-between md:items-center">
        <div className="flex-1 mt-3 lg:mt-0">
          <div className="py-8 space-y-3 pl-3 border-l-8 border-orange-500">
            <h3
              data-aos="fade-up"
              className="text-2xl lg:text-3xl font-bold text-gray-800 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 lg:size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
              17 November - 22 November
            </h3>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-lg font-semibold"
            >
              8:00 AM - 10:00 PM
            </p>
          </div>
          <div className="py-8 space-y-3 pl-3 border-l-8 border-gray-500">
            <h3
              data-aos="fade-up"
              className="text-2xl lg:text-3xl font-bold text-gray-800 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 lg:size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              01, Dhaka, Bangladesh
            </h3>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-lg font-semibold"
            >
              Event Address
            </p>
          </div>
          <div className="py-8 space-y-3 pl-3 border-l-8 border-gray-500">
            <h3
              data-aos="fade-up"
              className="text-2xl lg:text-3xl font-bold text-gray-800 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 lg:size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              008844018844
            </h3>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-lg font-semibold"
            >
              Phone Number
            </p>
          </div>
        </div>

        <div className="flex-1 relative w-full h-0 pb-[56.25%] lg:pb-[43%]">
          <iframe
            className="border-0 rounded-lg w-full h-full absolute top-0 left-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36825.2395856369!2d90.42018539379434!3d23.69287532435544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7168955db05%3A0x721be1908413d097!2sRafiqul%20Islam%20School%20%26%20College!5e0!3m2!1sen!2sbd!4v1720719374781!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div> */}
    </section>
  );
};

export default GoogleMap;
