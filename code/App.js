import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    'h1',
    { id: 'heading', class: 'headingClass', style: { color: 'green' } },
    'NamasteReact'
  );

  const jsxHeading=<h1>React JSX heading</h1>
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(jsxHeading);