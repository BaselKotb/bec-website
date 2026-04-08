import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600 mb-8`}>{firstItem?.description}</p>
            {firstItem?.link && (
              <a
                href={firstItem.link}
                className={`inline-block rounded border border-primary bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary-600`}
              >
                {firstItem.linkText || 'Learn More'}
              </a>
            )}
          </div>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center`}
          >
            <img
              className="h-64 w-auto object-contain rounded-lg shadow-lg"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center`}
          >
            <img
              className="h-64 w-auto object-contain rounded-lg shadow-lg"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
              {secondItem?.link && (
                <a
                  href={secondItem.link}
                  className={`inline-block rounded border border-primary bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary-600`}
                >
                  {secondItem.linkText || 'Learn More'}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
