/* eslint-disable react/prop-types */

function Skills({ title, image, isDarkTheme }) {
  return (
    <div
      className={`rounded-lg ${
        isDarkTheme ? "bg-gray-900" : "bg-slate-300"
      } shadow-lg shadow-blue-500/50 w-2/3 my-4`}
    >
      <div className="flex justify-center p-5">
        <img className="md:w-28 md:h-28" src={image} />
      </div>
      <div className="my-2">
        <p
          className={`text-center ${
            isDarkTheme ? "text-white" : "text-black"
          } md:text-4xl text-xl p-1 font-light`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default Skills;
