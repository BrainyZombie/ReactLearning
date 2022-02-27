const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div>
      Change Event tester:
      <br />
      <input onChange={(e) => console.log(e)} />
      <br />
      <input onChange={onChange} />
      <br />
      Drag Event tester:
      <br />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
