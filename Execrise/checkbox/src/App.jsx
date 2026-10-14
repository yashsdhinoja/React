import React, { useState } from 'react';

const App = () => {
  // 1. Declare separate state for each checkbox
  const [isReadingSelected, setIsReadingSelected] = useState(false);
  const [isCricketSelected, setIsCricketSelected] = useState(false);
  const [isSportsSelected, setIsSportsSelected] = useState(false);

  // 2. Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Hobbies:", {
      reading: isReadingSelected,
      cricket: isCricketSelected,
      sports: isSportsSelected
    });
  };

  return (
    <>
      <h1>CheckBox</h1>
      <form onSubmit={handleSubmit}>
        <div>Select your Hobbies:</div>
        
        <label>
          <input 
            type="checkbox" 
            checked={isReadingSelected} 
            onChange={(e) => setIsReadingSelected(e.target.checked)} 
          />
          Reading
        </label>
        <br />
        
        <label>
          <input 
            type="checkbox" 
            checked={isCricketSelected} 
            onChange={(e) => setIsCricketSelected(e.target.checked)} 
          />
          Cricket
        </label>
        <br />
        
        <label>
          <input 
            type="checkbox" 
            checked={isSportsSelected} 
            onChange={(e) => setIsSportsSelected(e.target.checked)} 
          />
          Sports
        </label>
        <br /><br />
        
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;