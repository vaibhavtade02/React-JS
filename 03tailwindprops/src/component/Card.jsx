import React from "react";

function Card({username,btnText}) {
    // console.log(username)
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          className="z-0 h-full w-full rounded-md object-cover"
          src="https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>

          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus
            perferendis voluptate veritatis labore{" "}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm fond-semibold text-white">
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
