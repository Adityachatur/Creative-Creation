import React from "react";
const VideoCircle = () => {
  return (
    <>
      <div className="h-[50px] bg-customGray">
        <div className="absolute bottom-0 left-3/4 transform -translate-x-1/2 translate-y-1/2 lg:w-60 lg:h-60 w-40 h-40 rounded-full z-9 bg-orange-500 flex justify-center items-center  cursor-pointer transition-all duration-300 ease-in hover:scale-105 hover:border-2 video">
          <h1 className="text-xl font-semibold text-white">Play Video</h1>
        </div>
      </div>
    </>
  );
};

export default VideoCircle;
