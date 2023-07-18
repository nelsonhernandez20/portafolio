/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function CardComponent({ dataContact, isDarkTheme }) {
  return (
    <div
      className={`w-full max-w-md p-4 ${
        isDarkTheme
          ? "bg-gray-800 border border-gray-700"
          : "bg-white border border-gray-200"
      }  rounded-lg shadow sm:p-8 `}
    >
      <div className="flex items-center justify-between mb-4">
        <h5
          className={`text-2xl font-bold leading-none ${
            isDarkTheme ? "text-white" : "text-gray-900"
          } `}
        >
          ways to contact me
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className={`divide-y ${
            isDarkTheme ? "divide-gray-700" : "divide-gray-200"
          } `}
        >
          {dataContact.map((contact, index) => (
            <li key={index} className="py-3 sm:py-4">
              <Link target="_blank" to={contact.link}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={contact.image}
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-xl font-medium ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      } `}
                    >
                      {contact.title}
                    </p>
                    <p
                      className={`text-xl ${
                        isDarkTheme ? "text-gray-500" : "text-gray-600"
                      } truncate `}
                    >
                      {contact.content}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardComponent;
