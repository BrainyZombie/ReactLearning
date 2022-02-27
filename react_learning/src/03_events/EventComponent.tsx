const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <div>
      Change Event tester:
      <br />
      <input onChange={(e) => console.log(e)} />
      <br />
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
