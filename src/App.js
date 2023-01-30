import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';
import Feed from './Feed';
import { useStateValue } from './StateProvider';
import Login from './Login';


function App() {
  const [{user}, dispatch] = useStateValue();
  return (
   
    <>
    {!user ? ( <Login /> ) : ( <div className="App"> <Header />
     <div className="App__body">
      <Sidebar />
     <Feed />
      <Sidebar2 />
     </div> 
     </div>  )}
     </>
  );
}

export default App;
