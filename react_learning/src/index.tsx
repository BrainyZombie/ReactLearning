import ReactDOM from "react-dom";
// import Parent from "./01_props/Parent";
import GuestList from "./02_state/GuestList";
const App = () => {
  return (
    <div>
      {/* <Parent /> */}
      <GuestList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
