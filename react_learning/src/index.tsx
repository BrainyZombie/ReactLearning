import ReactDOM from "react-dom";
import Spacer from "./Spacer";
import Parent from "./01_props/Parent";
import GuestList from "./02_state/GuestList";
import UserSearch from "./02_state/UserSearch";
import EventComponent from "./03_events/EventComponent";
const App = () => {
  return (
    <div>
      <Parent />
      <Spacer />
      <GuestList />
      <Spacer />
      <UserSearch />
      <Spacer />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
