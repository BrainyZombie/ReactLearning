import ReactDOM from "react-dom";
import Spacer from "./Spacer";
import Parent from "./01_props/Parent";
import GuestList from "./02_state/GuestList";
import UserSearch from "./02_state/UserSearch";
const App = () => {
  return (
    <div>
      <Parent />
      <Spacer />
      <GuestList />
      <Spacer />
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
