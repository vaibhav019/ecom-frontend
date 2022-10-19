import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Toolbar from "./Components/Toolbar/Toolbar"
import LoginScreen from "../src/Components/Screens/LoginScreen/LoginScreen"
import RegisterScreen from "../src/Components/Screens/RegisterScreen/RegisterScreen"
import GetAllUserscreen from "../src/Components/Screens/AllUserScreen/AllUserScreen"
import NewProduct from "../src/Components/AddProduct/CreateProduct"
import ForgetPasswordPage from "../src/Components/ForgotPassword/ForgotPassword"
import ResetPasswordPage from "../src/Components/ResetPassword/resetPassword"
import DashboardScreen from "../src/Components/Screens/UserHomeScreen/UserHomeScreen"
function App() {
  return (
    <div>
      
      <Toolbar/>
      <main 
style={{postion:'absolute',marginTop:'10%', }}
    >
    
       <Switch>
                <Route exact path='/'  >
                  <Redirect to="/Login" />
                </Route>
                <Route exact  path='/Login' component={LoginScreen} />
                <Route exact path='/Register' component={RegisterScreen} />
                <Route exact path='/AllUser' component={GetAllUserscreen} />
                <Route exact path='/product/new' component={NewProduct} />
                <Route exact path='/forgotpassword' component={ForgetPasswordPage} />
                <Route exact path='/reset-password/:token' component={ResetPasswordPage} />
                <Route exact path='/user/dashboard' component={DashboardScreen} />
              </Switch>
              </main>
    </div>
  );
}

export default App;
