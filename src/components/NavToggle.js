import "../css/sidebar.css";
import {useState} from 'react';
import {NavLink} from "react-router-dom";


function NavToggle(){

  const [data, setData] = useState('noneSidebar');
  function datastyle(){
    if(data === 'sidebar'){
        setData('noneSidebar');
    }
    else if(data === 'noneSidebar'){
      setData('sidebar');
    }
  }

  return(
    <>
    <div className="dischecbox">
      <input type="checkbox" id="navtoggle" className="navtoggle" onClick={datastyle}/>
                <label htmlFor="navtoggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
    </div>

    <div className={data}>
      <div className="navStyle">
        <div><NavLink to="/">π Home</NavLink></div>
        <div><NavLink to="/stu">π¨βπνμμ© μλ΄μ μ²­</NavLink></div>
        <div><NavLink to="/parent">π©βπ§νλΆλͺ¨μ© μλ΄μ μ²­</NavLink></div>
        <div><NavLink to="/weit">μλ΄ μ μ²­ κΈ°λ‘</NavLink></div>
        
      </div>
    </div>
                
    </>
  )
}

export {NavToggle};