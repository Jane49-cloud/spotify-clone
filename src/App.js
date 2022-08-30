import './style.css'
import './App.css';
import { LeftMenu } from './components/left-menu';
import { MainMenu } from './components/main-menu';
import { RightMenu} from './components/right-menu';

function App() {
  return (
   
   <> 
   <div className="App">
   <LeftMenu></LeftMenu>
   <MainMenu/>
   <RightMenu/>
   </div>

   <div className='background'>

   </div>
   </>
  );
}

export default App;
