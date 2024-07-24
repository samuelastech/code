export const Component = () => {
  return (
    <div>
      <button onClick={(event) => event.target.textContent = 'Clicked'}>Action</button>
    </div>
  );
};
