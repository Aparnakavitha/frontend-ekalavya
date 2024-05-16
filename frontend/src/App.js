import React from 'react';
import Tablecomponent from './Components/Table/Table'; // Assuming Tablecomponent is in the same directory as app.js

const App = () => {
  const headings = ['First Name', 'Last Name', 'Age',];
  const data = [
    ['John', 'Samual', 30],
    ['Jane', 'Smith', 25],
    ['Alice', 'Mary', 28],
    ['Meera', 'Davis', 23],
    ['boby', 'Smith', 25],
    ['Kevin', 'Joy', 27],
    ['Amal', 'Wilson', 24],
  ];

  return (
    <div>
      <Tablecomponent headings={headings} data={data} />
    </div>
  );
};

export default App;