import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    'h1',
    { id: 'heading', class: 'headingClass', style: { color: 'green' } },
    'NamasteReact'
  );
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(heading);