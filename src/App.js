
import './App.css';
import { LeftMenu } from './components/left-menu';
import { MainMenu } from './components/main-menu';
import { RightMenu} from './components/right-menu';

function App() {
  return (
   
   <> 
   <LeftMenu></LeftMenu>
   <MainMenu/>
   <RightMenu/>

   <div className='background'>

   </div>
   </>
  );
}

export default App;
