import { useState } from "react";
import { story } from "./data/story";
import Frame from "./components/Frame";
import Navbar from "./components/Navbar";
import FloatingElements from "./components/FloatingElements";
import Question from "./components/Question";
import FinalScreen from "./components/FinalScreen";

function App() {
  const [current, setCurrent] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const replay = () => {
    setCurrent(0);
    setShowQuestion(false);
    setShowFinal(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 relative overflow-hidden">
      {/* live background hearts/candy/teddy */}
      <FloatingElements />

      <Navbar />

      {!showQuestion && !showFinal && (
        <Frame
          image={story[current].image}
          text={story[current].text}
          onNext={() => {
            if (current === story.length - 1) {
              setShowQuestion(true);
            } else {
              setCurrent((p) => p + 1);
            }
          }}
        />
      )}

      {showQuestion && !showFinal && (
        <Question onYes={() => setShowFinal(true)} />
      )}

      {showFinal && <FinalScreen onReplay={replay} />}
    </div>
  );
}

export default App;
