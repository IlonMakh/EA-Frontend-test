import { MainPage } from "./pages/Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useEffect, useRef } from "react";

function App() {
  const app = useRef();
  useEffect(() => {
    app.current.classList.add("loaded");
  }, []);
  return (
    <Provider store={store}>
      <div ref={app} className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
