import React, { useState } from "react";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  function toggleMode() {
    setIsLightMode(prevMode => !prevMode);
  }

  return (
    <div className={`App ${isLightMode ? "light" : "dark"}`}>
      <button onClick={toggleMode}>
        {isLightMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default App;
