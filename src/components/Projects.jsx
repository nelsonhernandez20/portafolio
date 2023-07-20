/* eslint-disable react/prop-types */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ContextTheme from "../context/ContextTheme";
import { useContext } from "react";

function Projects({ tpo, content }) {
  const { isDarkTheme } = useContext(ContextTheme);
  return (
    <div
      className={`${
        isDarkTheme ? "bg-gray-900" : "bg-slate-50"
      } flex justify-center shadow p-2 rounded-lg items-center content-center`}
    >
      <div
        className={`mt-0 w-full ${tpo == "video" ? "md:w-full" : "md:w-1/2"}  my-4`}
      >
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          showIndicators={false}
        >
          {tpo == "video"
            ? content.map((cont, index) => (
                <div className="w-full" key={index}>
                  <iframe
                    width="100%"
                    height="315"
                    src={cont.url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              ))
            : content.map((cont, index) => (
                <div key={index}>
                  <img
                    className="object-cover w-full h-1/2 md:h-full justify-start flex"
                    src={cont.url}
                  />
                </div>
              ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
