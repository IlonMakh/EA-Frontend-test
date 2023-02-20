import { MainPage } from "./pages/Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useRef } from "react";
import { useAppLoaded } from "./hooks/useAnimation";

function App() {
  const app = useRef();
  useAppLoaded(app);
  return (
    <Provider store={store}>
      <div ref={app} className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
