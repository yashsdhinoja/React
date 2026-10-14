import React from 'react'
const App = () => {
  const submitHandle = (e) => {
    e.preventDefault()
    const selectedOption = e.target.option.value
    const mainContainer = document.querySelector('#root');
    if(selectedOption === 'Red'){
      setredcolorcount(redColorCount + 1)
      mainContainer.style.backGroundColor = "#880808"
    }
    else if(selectedOption === 'green'){ 
      mainContainer.style.backGroundColor = "#007200"
    }
    else if(selectedOption === 'blue'){
      mainContainer.style.backGroundColor = "#1b1bbb"
    }
  }
  return (
    <div>
      <h1 className='heading'>Select the Color</h1>
      <form onSubmit={submitHandle}>
        <label>
          <input type="radio" name="option" value="red"/>
          red
        </label>
         <label>
          <input type="radio" name="option" value="green"/>
          green
        </label>
         <label>
          <input type="radio" name="option" value="blue"/>
          blue
        </label>
      </form>
    </div>
  )
}

export default App