import MainSection from "../components/MainSection";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

//context
import ContextTheme from "../context/ContextTheme";
import { useContext } from "react";
import TabsComponents from "../components/TabsComponents";
import CardProject from "../components/CardProject";

const description =
  "I am a full stack programmer focused on both the development of web pages and mobile apps";
const skills = [
  { title: "React", image: "./assets/react-image.png" },
  { title: "React Native", image: "./assets/react-native-image.png" },
  { title: "Nextjs", image: "./assets/nextjs.png" },
  { title: "Nodejs", image: "./assets/nodejs.png" },
  { title: "Tailwind", image: "./assets/tailwind-logo.png" },
  { title: "PostgreSQL", image: "./assets/postgre-sql.png" },
];

const projectsMovil = [
  {
    url: "https://www.youtube.com/embed/71i3QPjSFrI",
    tpo: "video",
    title: "Deliveroo",
    description:
      "Deliveroo clone with cms sanity, redux, integrated google maps, app made with react native",
  },
  {
    url: "https://www.youtube.com/embed/o57STkOCZZk",
    tpo: "video",
    title: "AppCoffee",
    description: "cafeteria app styles made with pure css and heroicons icons",
  },
  {
    url: "https://www.youtube.com/embed/LkyBwVMdIZY",
    tpo: "video",
    title: "TodoApp",
    description:
      "task app with data persistence achieved with localstorage the app has the functionalities of a basic crud, this web app was made with nextjs and has its mobile version with sqlite to store data on the mobile",
  },
  {
    url: "./assets/iq/home.jpeg",
    tpo: "image",
    title: "IQ system",
    description:
      "University system made with react native and nodejs, this app has all the functionalities of a crud, in addition to chats with socket io, useContext for Darkmode, it has upload of images, upload of student notes, update of student notes, authentication token, sending email with pdf to students, push notifications with firebase, among other functionalities styles made with tailwind",
    carrousel: [
      { url: `./assets/iq/menu.jpeg` },
      { url: "./assets/iq/codPhone.jpeg" },
      { url: "./assets/iq/oportunidad.jpeg" },
      { url: "./assets/iq/programas.jpeg" },
      { url: "./assets/iq/tickets.jpeg" },
      { url: "./assets/iq/asignaciones.jpeg" },
    ],
  },
  {
    url: "./assets/dtis/login.jpeg",
    tpo: "image",
    title: "Dtis Company",
    description:
      "inventory system made with react native and nodejs, system with user registration, inventory registration search by barcode, report generator with pdf, drop-down menu, useContext for Darkmode and styles made with tailwind",
    carrousel: [
      { url: "./assets/dtis/menu.jpeg" },
      { url: "./assets/dtis/products.jpeg" },
      { url: "./assets/dtis/registroUsuario.jpeg" },
    ],
  },
];

function Home() {
  //extract context
  const { isDarkTheme } = useContext(ContextTheme);
  // console.log(import.meta.glob('/public/assets/iq/menu.jpeg'));
  return (
    <div className="min-h-screen">
      <MainSection
        isDarkTheme={isDarkTheme}
        title="I am Developer"
        description={description}
      />
      <div className="p-2">
        <AboutMe isDarkTheme={isDarkTheme} />
        <div>
          <h3
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } text-4xl font-bold md:text-left text-center md:ml-16 mt-4`}
          >
            My Skills
          </h3>
          <div className="my-4 md:grid md:grid-cols-3 grid grid-cols-2 gap-0">
            {skills.map((skill, index) => (
              <div className="flex justify-center" key={index}>
                <Skills
                  isDarkTheme={isDarkTheme}
                  key={index}
                  title={skill.title}
                  image={skill.image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <h4
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } text-center text-4xl`}
          >
            Proyectos
          </h4>
          <div className="md:visible md:w-full md:h-full w-0 h-0 invisible">
            <TabsComponents isDarkTheme={isDarkTheme} />
          </div>
          <div className="md:invisible md:w-0 md:h-0 visible">
            {projectsMovil.map((pro, index) => (
              <CardProject key={index} data={pro} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
