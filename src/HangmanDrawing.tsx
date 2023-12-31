const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      top: "50px",
      right: "-30px",
      position: "absolute",
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      top: "120px",
      right: "0",
      position: "absolute",
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      top: "150px",
      right: "-90px",
      position: "absolute",
      rotate: "-30deg",
      transform: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      top: "150px",
      right: 0,
      position: "absolute",
      rotate: "30deg",
      transform: "RIGHT bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      top: "250px",
      right: "-70px",
      position: "absolute",
      rotate: "60deg",
      transform: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      top: "250px",
      right: "-20px",
      position: "absolute",
      rotate: "-60deg",
      transform: "RIGHT bottom",
    }}
  />
);

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, RIGHT_LEG, LEFT_ARM, LEFT_LEG];

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          top: 0,
          right: "0",
          position: "absolute",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
