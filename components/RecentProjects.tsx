"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/lib/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Building products that{" "}
        <span className="text-purple">generate revenue</span>
      </h1>
      <p className="text-center text-white-200 mt-4 text-lg max-w-2xl mx-auto">
        From SaaS platforms to mobile apps and marketplaces, here's what I've
        shipped
      </p>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 overflow-hidden gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[36rem] lg:min-h-[36.5rem] h-[28rem] flex items-center overflow-hidden justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link ? "Visit Project" : item.title}
              href={item.link || "#"}
            >
              <div className="relative flex items-center justify-center lg:w-[570px] w-[80vw] overflow-hidden h-[20vh] md:h-[30vh] lg:h-[40vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt={`${item.title} preview`}
                  className="z-10 absolute bottom-0 object-cover"
                  width={520}
                  height={400}
                />
              </div>

              {/* Metrics Badge */}
              {item.metrics && (
                <div className="absolute top-4 right-4 bg-purple/20 backdrop-blur-sm px-3 py-1.5 z-10 rounded-full border border-purple/30">
                  <p className="text-xs font-semibold text-purple">
                    {item.metrics}
                  </p>
                </div>
              )}

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-base lg:font-normal font-light text-sm line-clamp-3 mt-3"
                style={{
                  color: "#BEC1DD",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                {item.link && (
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-base md:text-xs text-sm text-purple font-semibold">
                      Check it out
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                )}

                {!item.link && (
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-sm md:text-xs text-xs text-white-200 italic">
                      Private/Internal
                    </p>
                  </div>
                )}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
