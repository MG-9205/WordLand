import React from "react";
import logo from "../assets/images/Group 58.svg";
import style from "./style_files/Footer.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={style.main_div}>
        <div className={style.main}>
      <div className={style.sub_div1}>
        <div className={style.div1}>
          <div className={style.div1_img}>
            <img src={logo} alt="logo image" />
          </div>
          <div className={style.div1_content}>
            <span>A Little bit more about WordLand</span>
            <span>
              Your go-to platform for curated books aligned with academic
              courses. Explore, learn, and excel with Wordland.
            </span>
          </div>
        </div>
        <div className={style.div2}>
          <div className={style.div2_Quick_link}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                {" "}
                <Link className={style.link} to="/">
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/">
                  About Us
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/">
                  FeedBack
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/">
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.div2_contact_link}>
            <h4>Connect Us</h4>
            <ul>
              <li>
                {" "}
                <Link className={style.link} to="/">
                  Instagram
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/">
                  FaceBook
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/">
                  Email
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/">
                  Linked in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.sub_div2}>
        <div className={style.developer_info}>
          <h4>Manish Gupta (Web Developer)</h4>
          <div>
            <a href="/" className={style.link}>
              <MdOutlineEmail />
            </a>
            <a href="/" className={style.link}>
              <FaLinkedinIn />
            </a>
            <a href="/" className={style.link}>
              <FaTwitter />
            </a>
            <a href="/" className={style.link}>
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={style.developer_info}>
          <h4>Viraj (Web designers)</h4>
          <div>
            <a href="/" className={style.link}>
              <MdOutlineEmail />
            </a>
            <a href="/" className={style.link}>
              <FaLinkedinIn />
            </a>
            <a href="/" className={style.link}>
              <FaTwitter />
            </a>
            <a href="/" className={style.link}>
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={style.rights}>
          <div>
            <FaRegCopyright />
          </div>
          <div>2024 WordLand . All rights reserved </div>
        </div>
      </div>
      </div>
    </div>
  );
}
