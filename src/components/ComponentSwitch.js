const ComponentSwitch = ({ components, switchComponent, currentComponent }) => {
  return (
    <div>
      <h1>Component Switch</h1>
      {components.map((component) => (
        <button
          onClick={() => switchComponent(component)}
          key={component}
          style={{
            marginTop: "2rem",
            padding: "1rem",
            fontSize: "2rem",
            margin: "0 0.5rem",
            borderBottom:
              component === currentComponent ? "10px solid hotpink" : "",
          }}
        >
          {component}
        </button>
      ))}
      <hr />
    </div>
  );
};

export default ComponentSwitch;
