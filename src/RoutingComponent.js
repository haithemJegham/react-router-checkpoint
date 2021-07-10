

import {Switch,Route} from 'react-router-dom'
import App from './App'
import Description from './Components/Description'


const RoutingComponent =()=>{
 
    return(
        
    <Switch>
        <Route exact path="/" component={App}></Route>
        {/* <Route exact path="/description/:id" component={Description}></Route> */}
        <Route exact path="/description/:id" render={(props)=><Description {...props} Movies={Movies}></Description>}></Route>
    </Switch>
    )

}
export default RoutingComponent ;
