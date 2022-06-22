import Body from "./comps/Body";
import Header from "./comps/Header";
import Screen from "./comps/Screen";

function App() {
  return (
    <div className="App">
      <Header/>
      <Body>
        <Screen/>
      </Body>
    </div>
  );
}

export default App;
