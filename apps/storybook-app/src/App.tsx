import { AppButton, NativeButton } from 'ui';
import './App.css';
// import { Button, WebButton } from 'ui';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <AppButton primary={true} label='New Button' size='small' />
      <AppButton primary={true} label='New Button' size='medium' />
      <AppButton primary={true} label='New Button' size='large' />
      <NativeButton text='Native Button' onClick={() => { alert("Clicked") }} />

      {/* <WebButton text='Web Button' />
      <Button text='Native Button' /> */}
    </div>
  );
}

export default App;
