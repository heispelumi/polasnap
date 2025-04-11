import React from "react";
import { SlCamera } from "react-icons/sl";
import { Link } from "react-router-dom";

const Home = () => {
  const polaroids = [
    {
      img: "https://i.pinimg.com/474x/c1/01/51/c1015124d9dd4dc895e9cc22c21b2727.jpg",
      rotation: "rotate-[20deg]",
      translate: "translate-x-[20px] md:translate-x-[50px]",
      caption: null,
    },
    {
      img: "https://i.pinimg.com/474x/a6/1b/ef/a61bef35f7d3f489a9fe4c959566c658.jpg",
      rotation: "rotate-[-5deg]",
      translate: "translate-x-[-10px] md:translate-x-[-30px]",
      caption: null,
    },
    {
      img: "https://i.pinimg.com/474x/92/25/4f/92254fd0d1b954d58cc4c5bf22c7a6cc.jpg",
      rotation: "rotate-[8deg]",
      translate: "-translate-y-[40px] md:-translate-y-[80px] md:translate-x-[50px]",
      caption: "18 - 04 - 2024",
    },
    {
      img: "https://i.pinimg.com/474x/02/c4/47/02c44731597ad485bd307683dfe8a232.jpg",
      rotation: "rotate-[-12deg]",
      translate: "-translate-y-[30px] md:-translate-y-[50px]",
      caption: "London",
      wide: true,
    },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-12 overflow-hidden text-white ">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'300\' height=\'300\' viewBox=\'0 0 300 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'2.5\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')] bg-cover mix-blend-screen" />
      </div>



      {/* Main Content */}
      <div className="z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full max-w-7xl">
        {/* Text Section */}
        <div className="flex-1 text-center  md:pb-[100px] md:pt-0  lg:text-left animate-fade-in-up">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight logo drop-shadow-[0_2px_10px_rgba(255,192,203,0.4)]">
            Capture Moments,<br />
            <span className="text-pink-300 glow">Create Memories</span>
          </h1>
          <p className="mt-6 text-gray-300 text-[10px] md:text-[12px]  w-[218px] md:w-[420px] md:max-w-md mx-auto lg:mx-0 poppins">
            Turn your favorite photos into timeless Polaroid-style prints that bring your stories to life.
          </p>
        <Link to="/createpolaroid" ><button  className="mt-6 md:px-6 px-3  text-[12px] py-2 md:py-3 bg-white text-black font-semibold rounded-md shadow-md hover:scale-105 transition-all flex items-center gap-2 mx-auto lg:mx-0 hover:bg-pink-100 hover:shadow-pink-300/40 duration-300">
            <SlCamera className= " md:text-lg" /> Create Your Polaroid
          </button></Link> 
        </div>

        {/* Polaroid Section */}
        <div className="flex-1 relative grid grid-cols-2  md:grid-cols-2 gap-y-6 place-items-center animate-fade-in">
          {polaroids.map((item, i) => (
            <div
              key={i}
              className={`transform ${item.rotation} ${item.translate} ${
                item.wide ? "w-[160px] sm:w-[180px] md:w-[220px]" : "w-[140px] sm:w-[160px] md:w-[200px]"
              } bg-white backdrop-blur-md p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <img
                src={item.img}
                alt={`Polaroid ${i + 1}`}
                className="w-full h-full object-cover"
              />
              {item.caption && (
                <p className="text-xs text-center mt-1 text-black font-handwritten">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Home;
