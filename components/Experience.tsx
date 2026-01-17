import { workExperience } from "@/lib/data";
import { Button } from "./ui/MovingBorder";
const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        What I've learned from{" "}
        <span className="text-purple">building real products</span>
      </h1>
      <p className="text-center text-white-200 mt-4 text-base max-w-2xl mx-auto">
        Each product taught me something different, from scaling revenue to
        shipping fast to understanding users deeply
      </p>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-6">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 text-white dark:border-slate-800 border-neutral-200"
          >
            <div className="flex flex-col p-6 md:p-8 gap-4 h-full">
              {/* Header */}
              <div className="flex items-start gap-4">
                {card.thumbnail && (
                  <img
                    src={card.thumbnail}
                    alt={`${card.company} logo`}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
                  />
                )}
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {card.title}
                  </h2>
                  <p className="text-purple font-semibold text-base md:text-lg mt-1">
                    {card.company}
                  </p>
                  <p className="text-white-200 text-sm mt-1">{card.period}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white-100 text-sm md:text-base leading-relaxed">
                {card.desc}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {card.highlights?.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-black-200 border border-purple/30 rounded-full text-purple"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
