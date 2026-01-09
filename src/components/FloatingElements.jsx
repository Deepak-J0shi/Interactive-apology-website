const elements = ["💗", "🍬", "🧸", "💖", "✨"];

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const size = Math.random() * 20 + 16;
        const duration = Math.random() * 10 + 15;
        const emoji = elements[Math.floor(Math.random() * elements.length)];

        return (
          <span
            key={i}
            className="floating-element absolute bottom-[-40px]"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              fontSize: `${size}px`,
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
};

export default FloatingElements;
