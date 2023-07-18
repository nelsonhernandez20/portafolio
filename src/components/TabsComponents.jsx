/* eslint-disable react/prop-types */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Projects from "./Projects";

//Icons
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CoffeeIcon from "@mui/icons-material/Coffee";
import TaskIcon from "@mui/icons-material/Task";
import SchoolIcon from "@mui/icons-material/School";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsComponents({ isDarkTheme }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const videosDeliveroo = [
    { url: "https://www.youtube.com/embed/71i3QPjSFrI" },
  ];

  const videosCoffee = [{ url: "https://www.youtube.com/embed/o57STkOCZZk" }];

  const videosTodoApp = [{ url: "https://www.youtube.com/embed/LkyBwVMdIZY" }];

  const iqImages = [
    { url: "../../src/assets/iq/login.jpeg" },
    { url: "../../src/assets/iq/home.jpeg" },
    { url: "../../src/assets/iq/menu.jpeg" },
    { url: "../../src/assets/iq/codPhone.jpeg" },
    { url: "../../src/assets/iq/oportunidad.jpeg" },
    { url: "../../src/assets/iq/programas.jpeg" },
    { url: "../../src/assets/iq/tickets.jpeg" },
    { url: "../../src/assets/iq/asignaciones.jpeg" },
  ];

  const dtisImages = [
    { url: "../../src/assets/dtis/login.jpeg" },
    { url: "../../src/assets/dtis/menu.jpeg" },
    { url: "../../src/assets/dtis/products.jpeg" },
    { url: "../../src/assets/dtis/registroUsuario.jpeg" },
    { url: "../../src/assets/dtis/reports.jpeg" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          classes={true}
          allowScrollButtonsMobile={true}
          scrollButtons={true}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{ color: isDarkTheme ? "white" : "black" }}
            icon={<DeliveryDiningIcon />}
            {...a11yProps(0)}
          />
          <Tab
            style={{ color: isDarkTheme ? "white" : "black" }}
            icon={<CoffeeIcon />}
            {...a11yProps(1)}
          />
          <Tab
            style={{ color: isDarkTheme ? "white" : "black" }}
            icon={<TaskIcon />}
            {...a11yProps(2)}
          />
          <Tab
            style={{ color: isDarkTheme ? "white" : "black" }}
            icon={<SchoolIcon />}
            {...a11yProps(3)}
          />
          <Tab
            style={{ color: isDarkTheme ? "white" : "black" }}
            icon={<ElectricCarIcon />}
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h2 className={`${isDarkTheme ? "text-white" : "text-black"} text-2xl`}>
          Delivero Clone
        </h2>
        <Projects tpo="video" content={videosDeliveroo} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h2 className={`${isDarkTheme ? "text-white" : "text-black"} text-2xl`}>
          CoffeApp
        </h2>
        <Projects tpo="video" content={videosCoffee} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h2 className={`${isDarkTheme ? "text-white" : "text-black"} text-2xl`}>
          TodoApp
        </h2>
        <Projects tpo="video" content={videosTodoApp} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h2 className={`${isDarkTheme ? "text-white" : "text-black"} text-2xl`}>
          IQ System
        </h2>
        <Projects tpo="image" content={iqImages} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <h2 className={`${isDarkTheme ? "text-white" : "text-black"} text-2xl`}>
          Dtis Company
        </h2>
        <Projects tpo="image" content={dtisImages} />
      </CustomTabPanel>
    </Box>
  );
}
