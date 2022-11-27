import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Main from "./components/main";
import Parent from "./components/parent";
import Student from "./components/stu";
function App() {
  return (
   <>
   <Nav/>
   <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/parent" element={<Parent/>}></Route>
      <Route path="/stu" element={<Student/>}></Route>
   </Routes>
   </>
  );
}

export default App;
