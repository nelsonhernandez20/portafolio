import { useContext } from "react";
import ContextTheme from "../context/ContextTheme";
import CardComponent from "../components/CardComponent";
function Contact() {
  const { isDarkTheme } = useContext(ContextTheme);

  const dataContact = [
    {
      title: "Email",
      image: "../../src/assets/gmail.png",
      link: "#",
      content: "nelsonvozjr@gmail.com",
    },
    {
      title: "Whatsapp",
      image: "../../src/assets/whatsapp.png",
      link: "https://wa.me/+584247607637",
      content: "+584247607637",
    },
    {
      title: "Linkedin",
      image: "../../src/assets/linkedin.png",
      link: "https://www.linkedin.com/in/nelson-hernandez-dev/",
      content: "https://www.linkedin.com/in/nelson-hernandez-dev/",
    },
  ];
  return (
    <div className="flex justify-center mx-10 my-5 min-h-screen ">
      <CardComponent isDarkTheme={isDarkTheme} dataContact={dataContact} />
    </div>
  );
}

export default Contact;
