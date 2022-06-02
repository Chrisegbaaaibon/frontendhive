const FAQ = () => {
  return (
    <div>
      <section className="text-gray-700 dark:text-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-secondary mb-4">
              Frequently Asked Question
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 dark:bg-neutral-800 rounded-md py-2 px-4">
                  What platform is Hivend coming in?
                </summary>

                <span className="font-light font-poppins_light">
                  A website and a mobile app available on all devices
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 dark:bg-neutral-800 rounded-md py-2 px-4">
                  When is Hivend launching?
                </summary>

                <span className="font-light font-poppins_light">Very soon</span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 dark:bg-neutral-800 rounded-md py-2 px-4">
                  Who can teach on Hivend?
                </summary>

                <span className="font-light font-poppins_light">
                  Anyone can teach on Hivend.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 dark:bg-neutral-800 rounded-md py-2 px-4">
                  How would teachers get compensated?
                </summary>

                <span className="font-light font-poppins_light">
                  Either through money, airtime or crypto.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 dark:bg-neutral-800 rounded-md py-2 px-4">
                  Is Hivend free?
                </summary>

                <span className="font-light font-poppins_light">
                  The courses on Hivend are free but not all the features.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 dark:bg-neutral-800 rounded-md py-2 px-4">
                  How can I get access to premium features?
                </summary>

                <span className="font-light font-poppins_light">
                  You can get access to our premium features without paying by
                  joining the wait list before launch.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 dark:bg-neutral-800 rounded-md py-2 px-4">
                  How would Hivend educate people without internet?
                </summary>

                <span className="font-light font-poppins_light">
                  By providing/creating on ground platforms and educational
                  resources to help educate as much people as we can.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 dark:bg-neutral-800 rounded-md py-2 px-4">
                  Is joining the waitlist free?
                </summary>

                <span className="font-light font-poppins_light">
                  Joining the wait list is completely free.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
