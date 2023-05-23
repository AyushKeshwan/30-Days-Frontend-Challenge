import './App.css';
import Card from './components/Card'
function App() {
  return (
    <div>
      <h1 className='main-heading'>This is intro to react</h1>
      <div className='flex'>
      <Card title="10 superfast cars of 2023" img="https://source.unsplash.com/1600x900/?supercars" />
      <Card title="10 superfast bikes of 2023" img="https://source.unsplash.com/1600x900/?superbikes" />
      </div>
      
    </div>
  );
}

export default App;
