// import React from "react";

// const RecentSearches = ({ searches, onSelect }) => {
//   if (!searches || searches.length === 0) return null;

//   return (
//     <div className="mt-10 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg border border-gray-400 dark:border-gray-600">
//       <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center border-b-2 pb-3">
//         Recent Searches
//       </h2>

//       <div className="flex flex-wrap justify-center gap-4 p-4">
//         {searches.map((city, index) => (
//           <button
//             key={index}
//             onClick={() => onSelect(city)}
//             className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg border border-blue-600 hover:bg-blue-600 transition duration-300 shadow-md"
//           >
//             {city}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentSearches;

import React from "react";

const RecentSearches = ({ searches, onSelect }) => {
  if (!searches || searches.length === 0) return null;

  return (
    <div className="recent-searches-container">
      <h2 className="recent-searches-title">Recent Searches</h2>
      <div className="recent-searches-buttons">
        {searches.map((city, index) => (
          <button
            key={index}
            onClick={() => onSelect(city)}
            className="recent-search-btn"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;