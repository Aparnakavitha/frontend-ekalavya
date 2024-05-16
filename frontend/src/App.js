import React from 'react';
import SearchBar from './Components/Searchbar/Searchbar';

const App = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Implement your search logic here
  };

  return (
    <div>
    
      <SearchBar variant="large" placeholder="Search..." onSearch={handleSearch} />
    </div>
  );
};

export default App;

