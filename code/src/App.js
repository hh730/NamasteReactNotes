import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    'h1',
    { id: 'heading', class: 'headingClass', style: { color: 'green' } },
    'NamasteReact'
  );

  const jsxHeading=<h1>React JSX heading</h1>

  const Title=()=>(<h2 id="test">Functional Component</h2>);
  const HeadingComponent=()=>(<div id="container" >    <Title/>
  {jsxHeading}
  <h1>React Functional Component</h1>
  </div>)
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<HeadingComponent/>);