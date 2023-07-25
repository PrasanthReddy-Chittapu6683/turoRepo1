import logo from './logo.svg';
import './App.css';
import { Button, WebButton } from 'ui';

function App() {
  return (
    <div className="App">
      <h1>Storybook App</h1>
      <WebButton text='Web Button' />
      <Button text='Native Button' />
    </div>
  );
}

export default App;
