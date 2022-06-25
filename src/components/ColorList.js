import React from "react";

// Assignment example using normal 'props':
function ColorItem1(props) {
  return <li style={{ color: props.color}}>{props.color}</li>;
}

// My revised example using destructuring:
function ColorItem2({ color }) {
  return <li style={{ color: color }}>{color}</li>;
}

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  // NOTE: Since we are using '.map()' to create an array of JSX elements, we HAVE to use
  // the 'key' prop for each element of the array

  // ALSO: Ideally, the 'key' would unique 'id' values in a normal scenario

  // Original version:
  const colorElements1 = colors.map((color) => {
    return <ColorItem1 key={color} color={color} />;
  });

  // My version of 'colorElements' using the destructured version of 'props'
  const colorElements2 = colors.map((color) => {
    return <ColorItem2 key={color} color={color} />;

    // NOTE: This is the 'return' statement if we did NOT use a separate component above:
    /*
    return (
        <li key={color} style={{ color: color}}>
        {color}
      </li>
      );
      */
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
      {colorElements1}
      {colorElements2}
      </ol>
    </div>
  );
}

export default ColorList;
