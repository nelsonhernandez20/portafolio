/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Projects from "./Projects";

import ContextTheme from "../context/ContextTheme";

export default function CardProject({ data }) {
  const { isDarkTheme } = useContext(ContextTheme);
  const [mxWidth, setmxWidth] = useState(345);
  const sizeWindow = () => {
    if (screen.width < 1024) {
      console.log("entro");
      setmxWidth("99%");
    } else {
      setmxWidth(345);
    }
  };

  useEffect(() => {
    sizeWindow();
  }, []);

  return (
    <Card
      className={` my-6 mx-2 rounded-lg`}
      sx={{ maxWidth: mxWidth }}
      style={{
        backgroundColor: isDarkTheme ? "rgb(17 24 39)" : "rgb(226 232 240)",
      }}
    >
      {data.tpo == "image" ? (
        <div
          className={`${
            isDarkTheme ? "bg-gray-900" : "bg-slate-200"
          } justify-center flex p-2 rounded-lg`}
        >
          <Projects tpo="image" content={data.carrousel} />
          <CardContent className={isDarkTheme ? "bg-gray-900" : "bg-slate-100"}>
            <Typography
              className={isDarkTheme ? "text-white" : "text-black"}
              gutterBottom
              variant="h5"
              component="div"
            >
              {data.title}
            </Typography>
            <Typography
              className={isDarkTheme ? "text-white" : "text-black"}
              variant="body2"
              color="text.secondary"
            >
              <p className={isDarkTheme ? "text-gray-200" : "text-gray-800"}>
                {data.description}
              </p>
            </Typography>
          </CardContent>
        </div>
      ) : (
        <div
          className={`${
            isDarkTheme ? "bg-gray-900" : "bg-slate-200"
          } p-2 rounded-lg`}
        >
          <iframe
            width="100%"
            height="315"
            src={data.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <CardContent className={isDarkTheme ? "bg-gray-900" : "bg-slate-100"}>
            <Typography
              className={isDarkTheme ? "text-white" : "text-black"}
              gutterBottom
              variant="h5"
              component="div"
            >
              {data.title}
            </Typography>
            <Typography
              className={isDarkTheme ? "text-white" : "text-black"}
              variant="body2"
              color="text.secondary"
            >
              <p className={isDarkTheme ? "text-gray-200" : "text-gray-800"}>
                {data.description}
              </p>
            </Typography>
          </CardContent>
        </div>
      )}
    </Card>
  );
}
