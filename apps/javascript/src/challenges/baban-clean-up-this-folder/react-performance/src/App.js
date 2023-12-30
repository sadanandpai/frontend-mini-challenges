import React, { lazy, Suspense, useState } from "react";
import List from "./VirtualizedList/List";
import "./App.css";

const ImageLazy = lazy(() => import("./Image"));

const Spinner = () => {
  return <span>Loading...</span>;
};

function App() {
  const [showLazyComponent, setShowLazyComponent] = useState(false);

  const handleButtonClick = () => setShowLazyComponent(true);

  return (
    <div className="App">
      {/* <button className="button" onClick={handleButtonClick}>
        View Image
      </button>
      {showLazyComponent && (
        <Suspense fallback={<Spinner />}>
          <ImageLazy />
        </Suspense>
      )} */}
      <List />
    </div>
  );
}

export default App;
