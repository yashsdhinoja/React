import React from 'react';
import CardMotero from './components/card.jsx';
const App = () => {
  const user = 'Yash';
  return(
    <>
    <div>
      <div className='card'>
        <h1 className='headname'>Yash Dhinoja</h1>
        <p className='para'>This is the ReactJS Full Course | Learn Everything from Scratch to Advanced, your complete guide to mastering React in one video.</p>
      </div>

      <div className='card'>
        <h1 className='headname'>Yash Dhinoja</h1>
        <p className='para'>This is the ReactJS Full Course | Learn Everything from Scratch to Advanced, your complete guide to mastering React in one video.</p>
      </div>
      <CardMotero/><br/>
      {CardMotero()}

      <p>Hello {user}</p>

    </div>
    </>
  );
}

export default App