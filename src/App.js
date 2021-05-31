import Convert from './components/Convert'; //要放在最上面
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import './App.css';

library.add(fab, fas, far);



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Convert/>
    </div>
  );
}

export default App;
