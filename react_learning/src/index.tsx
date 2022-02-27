import ReactDOM from "react-dom";
import Spacer from "./Spacer";
import Parent from "./01_props/Parent";
import GuestList from "./02_state/GuestList";
import UserSearch from "./02_state/UserSearch";
import EventComponent from "./03_events/EventComponent";
import UserSearchClass from "./04_classes/UserSearchClass";
import UserSearchRef from "./06_refs/UserSearchRef";
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
      <Spacer />
      <UserSearchClass
        users={[
          { name: "sara", age: 22 },
          { name: "john", age: 30 },
          { name: "jane", age: 27 },
        ]}
      />
      <Spacer />
      <UserSearchRef />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
