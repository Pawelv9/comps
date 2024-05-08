import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function App() {
  const handleClick = () => {
    console.log('Click')
  };
  return (
    <div className="App">

      <div>
        <Button success rounded outline onClick={handleClick}>
          <GoBell />
          Click here
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div> 
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
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
