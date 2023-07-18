/* eslint-disable react/prop-types */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Projects from "./Projects";

import ContextTheme from "../context/ContextTheme";

export default function CardProject({ data }) {
  const { isDarkTheme } = React.useContext(ContextTheme);
  return (
    <Card
      className={`${isDarkTheme ? "bg-gray-900" : "bg-slate-200"} my-6`}
      sx={{ maxWidth: 345 }}
    >
      {data.tpo == "image" ? (
        <div className={`isDarkTheme ? "bg-gray-900" : "bg-slate-200" justify-center flex`}>
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
        <CardActionArea
          className={isDarkTheme ? "bg-gray-900" : "bg-slate-200"}
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
        </CardActionArea>
      )}
    </Card>
  );
}
