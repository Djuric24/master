import React from 'react';
import { createRoot } from 'react-dom/client';


function Prva() {
  return (
        <div>
         <Licnost/>
         <Poruka/>
        </div>
  );
}

const Licnost = () => {
      return   <h2>Ja sam ja Jeremija</h2>
};
const Poruka = () => {
    return      <h2>Voleo bi da pronadjem bolji posao u sledecoj godini!</h2>
};


const container = document.getElementById('root');

const root = createRoot(container);

root.render(<Prva/>);
