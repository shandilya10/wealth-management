import './App.css';
import login from "./pages/login";
import register from "./pages/register";
import stocks from "./pages/stocks";
import {
  Route,
  HashRouter
} from "react-router-dom";
import { useSelector } from 'react-redux';
function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  return (
    <div>
       <HashRouter>
          <Route exact path="/" component={login}/>
          <Route path="/login" component={login}/>
          <Route path="/register" component={register}/>
          <Route path="/stocks" component={stocks}/>
      </HashRouter>
    </div>
  );
}

export default App;
