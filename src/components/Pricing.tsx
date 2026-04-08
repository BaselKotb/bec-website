import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { title, subtitle, items } = pricing;
  const [firstItem, secondItem] = items;

  return (
    <section className={`bg-background py-16`} id="team">
      <div className={`container max-w-6xl mx-auto px-4`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary mb-4`}
        >
          {title}
        </h1>
        <p
          className={`text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto`}
        >
          {subtitle}
        </p>

        <div className={`flex flex-col lg:flex-row gap-8 justify-center`}>
          <div
            className={`flex-1 bg-white rounded-lg shadow-lg p-8 border border-gray-200`}
          >
            <h3 className={`text-2xl font-bold text-gray-800 mb-4`}>
              {firstItem?.name}
            </h3>
            <p className={`text-gray-600 mb-6`}>{firstItem?.description}</p>
            <ul className={`space-y-3`}>
              {firstItem?.features.map((feature, index) => (
                <li key={index} className={`flex items-start`}>
                  <svg
                    className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className={`text-gray-700`}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`flex-1 bg-white rounded-lg shadow-lg p-8 border border-gray-200`}
          >
            <h3 className={`text-2xl font-bold text-gray-800 mb-4`}>
              {secondItem?.name}
            </h3>
            <p className={`text-gray-600 mb-6`}>{secondItem?.description}</p>
            <ul className={`space-y-3`}>
              {secondItem?.features.map((feature, index) => (
                <li key={index} className={`flex items-start`}>
                  <svg
                    className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className={`text-gray-700`}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdJEMXIpcMl0fsVZn-dhFao9V-M6Ux7gBGypZP52esIaqzEwQ/viewform"
            className={`inline-block rounded border border-primary bg-primary px-8 py-4 text-lg font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary-600 transition-colors`}
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
