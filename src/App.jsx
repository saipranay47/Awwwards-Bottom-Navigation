import React from "react";

function App() {
  return (
    <div className="bg-black min-h-screen flex w-full justify-center items-center text-white flex-col">
      <div className="flex gap-4 flex-col items-center">
        <a
          href="https://saipranay.vercel.app/"
          target="_blank"
          className=" px-6 py-3 bg-transparent text-white border border-white rounded-full w-max"
        >
          Created by Sai Pranay.
        </a>
        <h1 className="text-center text-6xl tracking-tighter font-bold">
          Awwwards <br /> Sticky Bottom Navigation
        </h1>
        <p className="text-[#666] ">
          Explore your website with this beautiful sticky bottom navigation
          inspired by Awwwards.com.
        </p>
      </div>
    </div>
  );
}

export default App;
