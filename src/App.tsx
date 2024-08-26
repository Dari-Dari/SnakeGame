import { Provider } from "react-redux";
import CanvasBoard from "./components/CanvasBoard";
import ScoreCard from "./components/ScoreCard";
import store from "./store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="mainContainer">
        <div className="mainWrapper">
          <h1>SNAKE GAME</h1>
          <div className="mainScoreCard">
            <ScoreCard />
          </div>

          <CanvasBoard height={600} width={1000} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
