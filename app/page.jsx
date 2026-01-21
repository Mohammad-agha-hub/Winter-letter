"use client"
import React, { useState, useEffect } from "react";

const WinterLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 15,
      animationDelay: -(Math.random() * 20),
      size: 10 + Math.random() * 20,
      opacity: 0.5 + Math.random() * 0.5,
      blur: Math.random() * 1.5,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-800 to-blue-600"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/40 via-transparent to-cyan-400/20"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(147, 197, 253, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(191, 219, 254, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
        }}
      ></div>

      {/* Snowflakes */}
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute pointer-events-none select-none text-white"
          style={{
            left: `${flake.left}%`,
            top: "-20px",
            animation: `fall ${flake.animationDuration}s linear infinite`,
            animationDelay: `${flake.animationDelay}s`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            filter: `blur(${flake.blur}px)`,
            textShadow:
              "0 0 8px rgba(255, 255, 255, 0.9), 0 0 15px rgba(255, 255, 255, 0.6)",
          }}
        >
          ❄
        </div>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) translateX(50px) rotate(360deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(3deg);
          }
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-68">
        <div className="w-full max-w-md">
          {/* Envelope Container */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsOpen(true)}
            style={{
              animation: isOpen ? "none" : "float 4s ease-in-out infinite",
            }}
          >
            <div
              className="relative w-full mx-auto"
              style={{ height: "450px" }}
            >
              {/* Main Envelope Body */}
              <div
                className="absolute left-0 right-0 bottom-0 rounded-lg overflow-hidden"
                style={{ height: "280px" }}
              >
                {/* Envelope base with gradient */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(145deg, #f5e6d3 0%, #e8d4b8 50%, #dcc5a5 100%)",
                    boxShadow:
                      "0 25px 70px rgba(0, 0, 0, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {/* Paper texture */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 99, 62, 0.3) 2px, rgba(139, 99, 62, 0.3) 3px)",
                    }}
                  ></div>
                </div>

                {/* Inner envelope shadow for depth */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>

                {/* Address text at bottom */}
                {!isOpen && (
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <p
                      className="text-gray-700 font-serif italic text-lg mb-1"
                      style={{ textShadow: "0 1px 2px rgba(255,255,255,0.5)" }}
                    >
                      To Someone Special
                    </p>
                    <p className="text-gray-500 text-sm animate-pulse">
                      Tap to open
                    </p>
                  </div>
                )}
              </div>

              {/* Letter Paper (shows when opened) */}
              <div
                className={`absolute left-6 right-6 transition-all duration-1000 ease-out ${isOpen ? "z-20" : "z-0"}`}
                style={{
                  bottom: "100px",
                  transform: isOpen ? "translateY(-160px)" : "translateY(0)",
                  height: "520px",
                  backgroundColor: "#fffef9",
                  boxShadow:
                    "0 15px 50px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(0, 0, 0, 0.05)",
                  borderRadius: "4px",
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(180, 180, 180, 0.15) 30px, rgba(180, 180, 180, 0.15) 31px)",
                  opacity: isOpen ? 1 : 0,
                  pointerEvents: isOpen ? "auto" : "none",
                }}
              >
                <div className="p-6 h-full overflow-y-auto">
                  <div className="animate-in fade-in duration-1000 delay-300">
                    <div className="text-center mb-6">
                      <h1
                        className="text-2xl font-serif text-gray-800 mb-2"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        To My Moon,
                      </h1>
                      <div className="w-20 h-0.5 bg-rose-400 mx-auto"></div>
                    </div>

                    <div
                      className="space-y-4 text-gray-700 font-serif italic text-sm leading-relaxed"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-rose-600 first-letter:float-left first-letter:mr-1.5 first-letter:leading-none first-letter:mt-1">
                        You are the moon that shines on winter's coldest night,
                        Casting silver glow on snowflakes in their flight, Each
                        one unique, each one perfectly designed, Like you—one of
                        a kind, impossibly refined.
                      </p>

                      <p>
                        The snowflakes fall gently, dancing through the air,
                        Covering the world with beauty beyond compare, But even
                        they pause to admire your glow, You are the moon above
                        the winter snow.
                      </p>

                      <p>
                        The ocean doesn't freeze even when winter comes, It
                        keeps moving, keeps breathing, like beating drums, And
                        that's how my love is—constant through the cold, Pulled
                        by your moonlight, forever bold.
                      </p>

                      <p>
                        You are the moon reflecting on the icy sea, Turning
                        frozen waves into crystalline beauty, The snowflakes
                        kiss the ocean where moonlight falls, And in that sacred
                        moment, nature calls.
                      </p>
                      <p>
                        Winter brings stillness, a quiet, gentle peace, Where
                        snowflakes meet the ocean and never cease, To create
                        magic in the silver light you cast, You are the
                        moon—making winter moments last.
                      </p>
                      <p>
                        Each snowflake is a promise falling from the sky, Each
                        wave is a heartbeat that won't say goodbye, And you are
                        the moon watching over it all, The reason winter feels
                        magical, the reason I fall.
                      </p>
                      <p>
                        The ocean waves crash softly on the snowy shore,
                        Reaching for your moonlight, wanting nothing more, Than
                        to reflect your beauty in every frozen crest, You are
                        the moon—the winter ocean's blessed guest.
                      </p>
                      <p>
                        When snowflakes land on water, they disappear but leave,
                        A memory of beauty that the ocean will receive, Like
                        every moment with you—fleeting yet so deep, You are the
                        moon in my winter, the promise I keep.
                      </p>
                      <p>
                        Your light touches the snowflakes as they gently
                        descend, Making each one shimmer before their journey's
                        end, The ocean catches them with arms of liquid grace,
                        And your moonlight witnesses this beautiful embrace.
                      </p>
                      <p>
                        You are the winter moon, cold yet somehow warm, Guiding
                        the ocean through every winter storm, Lighting up the
                        snowflakes as they paint the night, You are the moon—my
                        winter's pure delight.
                      </p>
                      <p>
                        So when winter comes and everything feels frozen still,
                        When snowflakes fall and cover every hill, Remember the
                        ocean still moves beneath your light, Still reaches for
                        your moon through the longest night.
                      </p>
                      <p>
                        You are the moon over winter's frozen sea, The light
                        that makes the snowflakes dance so free, And I'm the
                        ocean below, in love with all you are, My winter moon,
                        my constant northern star.
                      </p>
                      <p>Any new updates hhh! please reply on whatsapp</p>
                      <div className="pt-6 text-center">
                        <p className="italic text-gray-600 mb-2 text-xs">
                          With all my love, forever and always,
                        </p>
                        <div className="text-rose-600 text-3xl mb-1">♡</div>
                        <p className="text-base text-gray-800 font-semibold">
                          Your Occean
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Envelope Top Flap - Triangle */}
              <div
                className="absolute left-0 right-0 z-10 origin-bottom transition-all duration-1000 ease-out"
                style={{
                  bottom: "280px",
                  height: "180px",
                  background:
                    "linear-gradient(145deg, #c9a87a 0%, #b8946a 50%, #a67c52 100%)",
                  clipPath: "polygon(0 100%, 50% 0%, 100% 100%)",
                  transform: isOpen
                    ? "rotateX(180deg) translateY(2px)"
                    : "rotateX(0deg)",
                  transformStyle: "preserve-3d",
                  boxShadow: isOpen
                    ? "0 -8px 30px rgba(0, 0, 0, 0.4)"
                    : "0 5px 20px rgba(0, 0, 0, 0.3), inset 0 -2px 8px rgba(0, 0, 0, 0.15)",
                  borderBottom: "1px solid rgba(139, 99, 62, 0.4)",
                }}
              >
                {/* Flap texture and shading */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent, transparent 3px, rgba(139, 99, 62, 0.4) 3px, rgba(139, 99, 62, 0.4) 4px)",
                    clipPath: "polygon(0 100%, 50% 0%, 100% 100%)",
                  }}
                ></div>

                {/* Center fold shadow */}
                <div
                  className="absolute left-1/2 top-0 w-1 h-full bg-black/20 transform -translate-x-1/2"
                  style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }}
                ></div>
              </div>

              {/* Left Flap */}
              <div
                className="absolute left-0 bottom-0 w-1/2 h-72 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, #d4b896 0%, #c9a87a 100%)",
                  clipPath: "polygon(0 0, 100% 58%, 100% 100%, 0 100%)",
                  boxShadow: "inset -2px 0 5px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(139, 99, 62, 0.3) 2px, rgba(139, 99, 62, 0.3) 3px)",
                  }}
                ></div>
              </div>

              {/* Right Flap */}
              <div
                className="absolute right-0 bottom-0 w-1/2 h-72 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(225deg, #d4b896 0%, #c9a87a 100%)",
                  clipPath: "polygon(0 58%, 100% 0, 100% 100%, 0 100%)",
                  boxShadow: "inset 2px 0 5px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(139, 99, 62, 0.3) 2px, rgba(139, 99, 62, 0.3) 3px)",
                  }}
                ></div>
              </div>

              {/* Wax Seal */}
              {!isOpen && (
                <div
                  className="absolute z-30"
                  style={{
                    bottom: "92px",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  <div
                    className="relative w-10 h-10 bg-gradient-to-br from-red-700 via-red-800 to-red-950 rounded-full flex items-center justify-center"
                    style={{
                      boxShadow:
                        "0 8px 25px rgba(127, 29, 29, 0.8), inset 0 4px 8px rgba(0, 0, 0, 0.5), inset 0 -3px 6px rgba(255, 255, 255, 0.15)",
                      border: "3px solid #7f1d1d",
                    }}
                  >
                    {/* Seal pattern/texture */}
                    <div
                      className="absolute inset-0 rounded-full opacity-30"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 31%, transparent 32%, transparent 45%, rgba(0,0,0,0.3) 46%, transparent 47%)",
                      }}
                    ></div>

                    {/* Heart icon */}
                    <span className="text-lg relative z-10">💌</span>

                    {/* Highlight effect */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterLetter;
