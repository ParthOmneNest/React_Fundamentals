const Card = ({ children }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        width: "25%",
        margin: "10px",
        padding: "10px",
        border: "2px solid white",
        alignItems: "center",
        textAlign: "left",
        color: "white",
      }}
    >
      {children}
    </div>
  );
};

export const CardWrapper = ({ name, image, age, value }) => {
  return (
    <Card>
      <img
        src={image}
        alt={name}
        style={{ width: "60px", height: "60px", marginRight: "15px" }}
      />
      <div>
        <p style={{ margin: "2px" }}>Name: {name}</p>
        <p style={{ margin: "2px" }}>Age: {age}</p>
        <p style={{ margin: "2px" }}>Value: {value}</p>
      </div>
    </Card>
  );
};
