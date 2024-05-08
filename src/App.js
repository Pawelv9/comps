import Button from './Button';

function App() {
  return (
    <div className="App">
      App
      <div>
        <Button success roundede outline>Click here</Button>
      </div>
      <div>
        <Button danger outline>Buy Now!</Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>Hide Ads</Button>
      </div>
      <div>
        <Button primary rounded>Smth</Button>
      </div>
    </div>
  );
}

export default App;
