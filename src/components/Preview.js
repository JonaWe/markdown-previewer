import React from "react";

const Preview = ({ text }) => {
  const lines = text.split(/\r\n|\n\r|\n|\r/);
  console.log(lines);
  const isHeading = (str, depth) => {
    let regex = new RegExp(`^\\s*#{${depth}}[^#]`, "g");
    return str.match(regex);
  };
  const compiled = (
    <>
      {lines.map((line) => {
        if (isHeading(line, 1)) {
          return <h1>{line.replace(/#/g, "")}</h1>;
        } else if (isHeading(line, 2)) {
          return <h2>{line.replace(/#/g, "")}</h2>;
        } else if (isHeading(line, 3)) {
          return <h3>{line.replace(/#/g, "")}</h3>;
        } else if (isHeading(line, 4)) {
          return <h4>{line.replace(/#/g, "")}</h4>;
        } else {
          return <p>{line}</p>;
        }
      })}
    </>
  );
  return <div className="preview">{compiled}</div>;
};

export default Preview;
