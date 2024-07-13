const GoogleMap = () => {
  return (
    <section className="my-20 lg:my-28 px-3  min-h-[600px] max-w-screen-xl mx-auto">
      <div className="mb-10 max-w-2xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-gray-800 font-bold text-center font-young-serif"
        >
          Our Location
        </h2>
        <p className="text-gray-600 text-center">
          Visit us at 123 Adventure Lane, Campersville. Explore our extensive
          range of camping gear and get personalized advice from our expert
          team. We're here to enhance your outdoor adventures!
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between md:items-center">
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
      </div>
    </section>
  );
};

export default GoogleMap;
