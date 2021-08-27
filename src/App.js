import { Route, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import System from './components/System/System'


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenString = localStorage.getItem('@Sanduicheria:user');
    if (tokenString){
      const tokenJson = JSON.parse(tokenString);
      setToken(tokenJson);
    }
  }, [])

  return (
    
      <Router>
        {token 
          ?
          <>
            <Route exact path='/' render={() => <System token={token} setToken={setToken}/>} />
            
          </>  
          :
          <Route path='/' render={() => <Login setToken={setToken} />} />
        }   
        
      </Router>
  );
}

export default App;
