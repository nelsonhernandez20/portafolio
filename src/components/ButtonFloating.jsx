import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const actions = [
  {
    icon: <WhatsAppIcon />,
    name: "Whatsapp",
    href: "https://wa.me/+584247607637",
  },
  {
    icon: <LinkedInIcon />,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nelson-hernandez-dev/",
  },
  {
    icon: <GitHubIcon />,
    name: "Github",
    href: "https://github.com/nelsonhernandez20",
  },
];

export default function ButtonFloating() {
  const location = (value) => {
    window.location.replace(value);
  };

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute" }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={() => location(action.href)}
            tooltipOpen
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
