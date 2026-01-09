const Frame = ({ image, text, onNext }) => {
  return (
    <div className="relative flex-1 flex items-center justify-center px-10 py-16 overflow-hidden">

      {/* soft decorative background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-40"></div>

      {/* main layout */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT : IMAGE FRAME */}
        <div className="flex justify-center">
          <div className="w-[440px] h-[560px] bg-white/90 backdrop-blur-xl rounded-[3rem] shadow-2xl p-6 flex items-center justify-center">
            <img
              src={image}
              alt="memory"
              className="w-full h-full object-contain rounded-[2.5rem]"
            />
          </div>
        </div>

        {/* RIGHT : TEXT CARD */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[3rem] p-12 shadow-2xl">
          <p className="text-4xl font-medium text-gray-700 leading-relaxed mb-12 whitespace-pre-line">
            {text}
          </p>

          <button
            onClick={onNext}
            className="px-14 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300"
          >
            Next 💖
          </button>
        </div>

      </div>
    </div>
  );
};

export default Frame;
