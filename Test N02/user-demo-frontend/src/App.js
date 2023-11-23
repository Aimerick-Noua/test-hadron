import UserForm from "./UserForm"
import UserList from "./UserList"
import {Routes,Route} from 'react-router-dom'
const App = () =>{
  return <div 
  className="bg-gray-800" style={{width:'100%', height:'100vh'}}>



<Routes>
<Route path="/" element={<UserList/>}></Route>
<Route path="userList" element={<UserList/>}></Route>
<Route path="addUser" element={<UserForm/>}></Route>
<Route path="addUser/:id" element={<UserForm/>}></Route>
</Routes>
  </div>
  
}
export default App