import React, { useState } from "react";
import SelectPerson from "./components/SelectPerson";
import Animation from "./components/Animation";
import Result from "./components/Result";
import { mapping } from "./data/mapping";



export default function App() {
  const [person, setPerson] = useState(null);
  const [stage, setStage] = useState("select");

  const handleSelect = (p) => {
    const saved = localStorage.getItem(`picked_${p}`);

    // Animacja ma się pojawiać ZAWSZE, nawet jeśli ktoś już kiedyś losował
    if (saved) {
      setPerson(p);
      setStage("animation");
      return;
    }

    setPerson(p);
    setStage("animation");
  };

  const finishAnimation = () => {
    // Ustawiamy wynik tylko jeśli nie istnieje
    if (!localStorage.getItem(`picked_${person}`)) {
      localStorage.setItem(`picked_${person}`, mapping[person]);
    }

    setStage("result");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {stage === "select" && <SelectPerson onSelect={handleSelect} />}
      {stage === "animation" && <Animation onFinish={finishAnimation} />}
      {stage === "result" && <Result person={person} target={mapping[person]} />}
    </div>
  );
}
