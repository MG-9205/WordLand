import { React, useRef, useState } from "react";
import navstyle from "./style_files/navbar.module.css";
import logo from "../assets/images/Group 58.svg";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const Genre_list = [
    "Susprnse",
    "Thriller",
    "Action",
    "Adventure",
    "Fantasy",
    "Historical",
    "Horror",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Crime",
    "Biography",
  ];
  const course_list=[
    "BCA",
    "BBA",
    "BCOM"
  ]
  const [toggle_menu_icon, set_menu_toggle_icon] = useState("inline");
  const [toggle_close_icon, set_close_toggle_icon] = useState("none");
  const Genre_sublist = useRef("none");
  const course_sublist = useRef("none");
  const searchbox_ref = useRef(null);
  const search_input_ref = useRef(0);
  const mobile_menu=useRef(null)
  const Genre_option=useRef(null)
  const Courses_option=useRef(null)
  const display_sublist = (event) => {
    const text= event.target.getAttribute('data-value');
    if (text == "Genre") {
      if (Genre_sublist.current) {
        const current_display = window
          .getComputedStyle(Genre_sublist.current)
          .getPropertyValue("display");
        Genre_sublist.current.style.display =
          current_display === "none" ? "flex" : "none";
      }
    }
   if(text=='Courses')
    {
      if (course_sublist.current) {
        const current_display = window
          .getComputedStyle(course_sublist.current)
          .getPropertyValue("display");
        console.log(current_display);
        course_sublist.current.style.display =
          current_display === "none" ? "block" : "none";
      }
    }
  };
  const toggle_icon = () => {
    if (toggle_menu_icon === "inline") {
      set_menu_toggle_icon((toggle_menu_icon) => (toggle_menu_icon = "none"));
      set_close_toggle_icon(
        (toggle_close_icon) => (toggle_close_icon = "inline")
      );
      //const transfrom_current=window.getComputedStyle(mobile_menu.current).getPropertyValue('transform')
      mobile_menu.current.style.transform='translateX(0%)';

      
    } else {
      set_menu_toggle_icon((toggle_menu_icon) => (toggle_menu_icon = "inline"));
      set_close_toggle_icon(
        (toggle_close_icon) => (toggle_close_icon = "none")
      );
      mobile_menu.current.style.transform='translateX(100%)';
    }
  };
  const search_function = () => {
    if (search_input_ref && search_input_ref.current.value=="") {
      const inputbox_width = window
        .getComputedStyle(search_input_ref.current)
        .getPropertyValue("width");
      console.log(inputbox_width);
      search_input_ref.current.style.width =
        inputbox_width == "0px" ? "100%" : "0px";
    }
  };
  const show_Coption=()=>{
    if(Courses_option.current)
    {
            const C_height=window.getComputedStyle(Courses_option.current).getPropertyValue('height')
            Courses_option.current.style.height=C_height==='0px'?'fit-content':'0px'
    
    }
  
  }
  const show_Goption=()=>{
    if(Genre_option.current)
    {
            const C_height=window.getComputedStyle(Genre_option.current).getPropertyValue('height')
            Genre_option.current.style.height=C_height==='0px'?'fit-content':'0px'
    
    }
  }

  return (
    <>
      <nav className={navstyle.nav_body}>
        <div className={navstyle.nav_div}>
          <img src={logo} alt="no image" className={navstyle.nav_logo} />
          <div className={navstyle.nav_div}>
            <ul className={navstyle.nav_ul}>
              <li className={navstyle.nav_hover}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                className={`${navstyle.option_list} ${navstyle.nav_hover}`}
                onClick={display_sublist}
                data-value="Courses"
              >
                Courses
                <ul className={navstyle.course_list} ref={course_sublist}>
                  {course_list.map((item, index) => (
                    <li className={navstyle.nav_hover} key={index}>
                      <NavLink to="/">{item}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={`${navstyle.option_list} ${navstyle.nav_hover}`}
                onClick={display_sublist} data-value="Genre"
              >
                Genre
                <ul className={navstyle.Genre_list} ref={Genre_sublist}>
                  {Genre_list.map((item, index) => (
                    <li key={index}>
                      <NavLink to="/">{item}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={navstyle.nav_hover}>
                <NavLink to="/">Feedback</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className={navstyle.nav_div}>
          <div className={navstyle.searchbox} ref={searchbox_ref}>
            <input type="text" placeholder="Search" ref={search_input_ref} />
            <b>
              <FaSearch className={navstyle.icon} onClick={search_function} />
            </b>
          </div>
          <div className={navstyle.login_div}>
            <button className={navstyle.login_btn}>Login</button>
            <CgProfile className={navstyle.login_btn_icon} />
          </div>
          <div className={navstyle.mobile_icon}>
            <RiMenu3Fill
              className={navstyle.icon}
              style={{ display: `${toggle_menu_icon}` }}
              onClick={toggle_icon}
            />
            <MdClose
              className={navstyle.icon}
              style={{ display: `${toggle_close_icon}` }}
              onClick={toggle_icon}
            />
          </div>
        </div>
{/*mobile menu*/} 
        <div className={navstyle.mobile_menu} ref={mobile_menu}>
          <ul className={navstyle.mobile_menu_ul}>
            <li><NavLink to="/">Home</NavLink></li>
            <li className={navstyle.mobile_menu_special_li}  onClick={show_Coption}><div ><span>Courses</span><div><b>&gt;</b></div></div>
            <ul className={navstyle.option} ref={Courses_option}>
              <li></li>
            {course_list.map((item, index) => (
                    <li className={navstyle.nav_hover} key={index}>
                      <NavLink to="/">{item}</NavLink>
                    </li>
                  ))}
            </ul>
            </li>
            <li className={navstyle.mobile_menu_special_li}   onClick={show_Goption}  data-value='Genre'><div><span>Genre</span><div><b>&gt;</b></div></div>
            <ul className={navstyle.option} ref={Genre_option}>
              <li></li>
            {Genre_list.map((item, index) => (
                    <li key={index}>
                      <NavLink to="/">{item}</NavLink>
                    </li>
                  ))}
            </ul></li>
            <li><NavLink to="/">Feedback</NavLink></li>
            <li>
              <div>
                <button className={navstyle.login_btn}>Login</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
