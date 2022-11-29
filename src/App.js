import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Main from "./components/main";
import Parent from "./components/parent";
import Student from "./components/stu";
import Email from "./components/email";
import Weit from "./components/weit";
import {NavToggle} from "./components/NavToggle";
function App() {
  return (
   <>
   
   <Nav/>
   <NavToggle/>
   <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/parent" element={<Parent/>}></Route>
      <Route path="/stu" element={<Student/>}></Route>
      <Route path="/email" element={<Email/>}></Route>
      <Route path="/weit" element={<Weit/>}></Route>
   </Routes>
   </>
  );
}

export default App;
