/* eslint-disable react/prop-types */

/* eslint-disable react/no-unescaped-entities */
function AboutMe({ isDarkTheme }) {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("CV-NelsonHernandez.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV-NelsonHernandez.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="md:flex md:flex-row justify-center my-6 md:mx-52 md:p-4">
      <div className="md:mx-3 mx-1 md:w-2/5 w-full">
        <img
          className="md:w-full w-40 block mx-auto"
          src="./assets/avatar.jpg"
        />
      </div>
      <div className="mx-3 md:w-3/5 w-full">
        <h3 className="text-cyan-600 font-bold text-2xl my-2 md:text-left text-center">
          Who am i?
        </h3>
        <h4
          className={`${
            isDarkTheme ? "text-white" : "text-black"
          } font-semibold text-xl my-2 md:text-left text-center`}
        >
          I am Nelson Hernandez Full Stack Programmer, Web Developer and Mobile
          Apps Developer
        </h4>
        <div className="border-2 border-transparent border-b-cyan-600">
          <p
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } font-light pb-4 md:text-left text-center`}
          >
            I consider myself a disciplined person focused on solving
            objectives. I am usually someone who looks for ways to solve a
            situation with methods outside the box of ideas. I feel that I can
            contribute a lot to new projects, as well as those projects that
            will leave me with great experiences and learning. I am usually
            someone who likes to work and share knowledge with the people I meet
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="mx-4 my-4">
            <p
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } font-medium my-2`}
            >
              Name: <span className="font-light">Nelson Hernandez</span>
            </p>
            <p
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } font-medium my-2`}
            >
              Age: <span className="font-light">23</span>
            </p>
          </div>
          <div className="mx-4 my-4">
            <p
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } font-medium my-2`}
            >
              From: <span className="font-light">Venezuela</span>
            </p>
            <p
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } font-medium my-2`}
            >
              Email: <span className="font-light">nelsonvozjr@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="flex md:justify-start justify-center mx-2">
          <button
            onClick={() => onButtonClick()}
            className="rounded-none bg-cyan-600 px-5 py-3 text-white font-light"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
