import { Provider } from "react-redux";
import Characteristics from "../Characteristics/Characteristics";
import { store } from "../../storage/store";
import TreeEditor from "../TreeEditor/TreeEditor";
import "./App.css";
import { Toolbar } from "../Toolbar/Toolbar";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TreeEditor width={600} height={600} />
        <Characteristics />
        <Toolbar />
      </div>
    </Provider>
  );
}

export default App;
