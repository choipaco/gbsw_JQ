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
        <div><NavLink to="/">🏠Home</NavLink></div>
        <div><NavLink to="/stu">👨‍🎓학생용 상담신청</NavLink></div>
        <div><NavLink to="/parent">👩‍👧학부모용 상담신청</NavLink></div>
        <div><NavLink to="/weit">상담 신청 기록</NavLink></div>
        
      </div>
    </div>
                
    </>
  )
}

export {NavToggle};