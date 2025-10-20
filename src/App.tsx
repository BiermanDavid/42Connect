import './App.css';

function App() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
    // Add your button logic here
  };

  return (
    <div className="app-container">
      <img 
        src="/background.svg" 
        alt="Background" 
        className="background-image"
      />
      <img 
        src="/button.svg" 
        alt="Button" 
        className="button-image"
        onClick={handleButtonClick}
      />
    </div>
  );
}

export default App;