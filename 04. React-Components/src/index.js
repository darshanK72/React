import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const MyCreatedComponent = React.createElement("h1",{title:"This is title"},"This is my created component");

// const OtherObjectComponent = (
//   <>
//     <p>This is other object component</p>
//   </>
// )

// function CustomFunctionComponent(){
//   return (
//     <>
//       <p>this is from my custom function component</p>
//     </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <CustomFunctionComponent />
  // MyCreatedComponent 
  // OtherObjectComponent
  <App/>
);
