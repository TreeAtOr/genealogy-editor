import { Provider } from "react-redux";
import Characteristics from "../Characteristics/Characteristics";
import { store } from "../../storage/store";
import TreeEditor from "../TreeEditor/TreeEditor";
import "./App.css";
import { Toolbar } from "../Toolbar/Toolbar";
import TreeDrawer from "../TreeDrawer/TreeDrawer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Toolbar />
        <TreeDrawer/>
        <Characteristics />
      </div>
    </Provider>
  );
}

export default App;
