import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <>
      <Child color="red" onClick={() => console.log("Child Clicked")} />

      {/* <Child color="red" onClick={() => console.log("Child Clicked")}>
        <div>Child can't have children</div>
      </Child> */}
      <br />
      <ChildAsFC color="red" onClick={() => console.log("ChildAsFC Clicked")}>
        <div>ChildAsFC can have children</div>
      </ChildAsFC>
    </>
  );
};

export default Parent;
