import React from 'react';
import ReactDom from 'react-dom';


// function Prva() {
//   return <div>
//           <h2>Ovo je moja prva komponenta</h2>
//         </div>
// }

const Prva = () => {
  return React.createElement(
    'div',
     {},
     React.createElement('h1', {},'Ovo je moja prva komponenta' )  
  )
};


ReactDom.render(<Prva/>, document.getElementById('root')
);