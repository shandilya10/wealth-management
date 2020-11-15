import './App.css';
import login from "./pages/login";
import register from "./pages/register";
import {
  Route,
  HashRouter
} from "react-router-dom";
function App() {
  return (
    <div>
       <HashRouter>
          <Route exact path="/" component={login}/>
          <Route path="/login" component={login}/>
          <Route path="/register" component={register}/>
      </HashRouter>
    </div>
  );
}

export default App;
