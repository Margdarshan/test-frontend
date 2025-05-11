import React from 'react';

function ImageContainer() {
  return (
    <div className="flex flex-col lg:w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex gap-10 items-start pt-1.5 pb-96 pl-20 w-full bg-violet-50 bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/42c8ecca53b68e79514045a994efbe1fc3ae15292f0c14d5f17e0e9fcd7b2000?placeholderIfAbsent=true&apiKey=9a32bc866e724018820ce764b81eba46')] bg-cover bg-center rounded-xl max-md:pb-24 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22b0c49c82fc0a78bfd589091d4884eb4ca17b4d1abbd3cc39493cee1614a9e0?placeholderIfAbsent=true&apiKey=9a32bc866e724018820ce764b81eba46"
          className="object-contain shrink-0 self-start aspect-[1.67] w-[85px]"
          alt=""
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e52ca2ed21e0c5ce665e2f2f326edce6e1aad38aecbd6e5ee73aafab59c71e16?placeholderIfAbsent=true&apiKey=9a32bc866e724018820ce764b81eba46"
          className="object-contain z-10 shrink-0 self-end mt-12 aspect-[1.67] w-[65px] max-md:mt-10 max-md:-mr-1.5"
          alt=""
        />
      </div>
    </div>
  );
}

export default ImageContainer;
