// import { useState } from "react";

// const Question = ({ onYes }) => {
//   const [noClicks, setNoClicks] = useState(0);
//   const [pos, setPos] = useState({ top: "60%", left: "55%" });

//   const moveNo = () => {
//     if (noClicks >= 4) return;

//     const top = Math.random() * 60 + 20;
//     const left = Math.random() * 60 + 20;

//     setPos({
//       top: `${top}%`,
//       left: `${left}%`,
//     });

//     setNoClicks((p) => p + 1);
//   };

//   return (
//     <div className="flex-1 flex items-center justify-center relative px-10 py-20">

//       {/* Question Card */}
//       <div className="bg-white/90 backdrop-blur-xl rounded-[3rem] p-14 shadow-2xl text-center max-w-xl w-full">
//         <h2 className="text-4xl font-semibold text-gray-700 mb-12">
//           Kya ab tumhari narazgi chali gyi? 🥺
//         </h2>

//         <div className="flex items-center justify-center gap-12 relative">

//           {/* YES BUTTON */}
//           <button
//             onClick={onYes}
//             className="px-12 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300"
//           >
//             Yes ❤️
//           </button>

//           {/* NO BUTTON */}
//           {noClicks < 5 && (
//             <button
//               onMouseEnter={moveNo}
//               onClick={moveNo}
//               style={{
//                 position: "absolute",
//                 top: pos.top,
//                 left: pos.left,
//               }}
//               className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-medium shadow-lg transition-all duration-300"
//             >
//               No 😤
//             </button>
//           )}
//         </div>

//         {noClicks >= 4 && (
//           <p className="mt-10 text-lg text-gray-500 italic">
//             Lagta hai jawab mil hi gaya… 😌💖
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Question;
import { useState } from "react";

const Question = ({ onYes }) => {
  const [noClicks, setNoClicks] = useState(0);
  const [floating, setFloating] = useState(false);
  const [pos, setPos] = useState({ top: "50%", left: "50%" });

  const handleNoClick = () => {
    const next = noClicks + 1;
    setNoClicks(next);

    // 5th click ke baad permanently gayab
    if (next >= 5) return;

    // No ko temporarily hide karo
    setFloating(false);

    // thodi der baad random jagah pop karo
    setTimeout(() => {
      const top = Math.random() * 60 + 20;
      const left = Math.random() * 60 + 20;

      setPos({
        top: `${top}%`,
        left: `${left}%`,
      });

      setFloating(true);
    }, 300);
  };

  return (
    <div className="flex-1 flex items-center justify-center relative px-10 py-20">

      {/* Question Card */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-[3rem] p-14 shadow-2xl text-center max-w-xl w-full">

        <h2 className="text-4xl font-semibold text-gray-700 mb-14">
          Kya tum ab bhi naraz ho? 🥺
        </h2>

        {/* Button Area */}
        <div className="relative h-40 flex items-center justify-center gap-10">

          {/* YES BUTTON (stable) */}
          <button
            onClick={onYes}
            className="px-12 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300 z-10"
          >
            Yes ❤️
          </button>

          {/* NO BUTTON — initial side-by-side */}
          {noClicks === 0 && (
            <button
              onClick={handleNoClick}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-medium shadow-lg transition-all duration-300"
            >
              No 😤
            </button>
          )}

          {/* NO BUTTON — floating version */}
          {noClicks > 0 && noClicks < 5 && floating && (
            <button
              onClick={handleNoClick}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                transform: "translate(-50%, -50%)",
              }}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-medium shadow-lg transition-all duration-300"
            >
              No 😤
            </button>
          )}
        </div>

        {/* Cute message after No disappears */}
        {noClicks >= 5 && (
          <p className="mt-10 text-lg text-gray-500 italic">
            Ab to sirf ek hi jawab bachta hai… 😌💖
          </p>
        )}
      </div>
    </div>
  );
};

export default Question;
