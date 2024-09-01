import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";
export const Contact = () => {
  const [EmailInput, setEmailInput] = useState("");
  const [IsValid, setIsValid] = useState("");
  const HandleInput = (e) => {
    const { value } = e.target;
    setEmailInput(value);
  };
  const EmailValidation = (e) => {
    e.preventDefault();
    const validEmails = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (validEmails.test(EmailInput)) {
      setIsValid("Valid");
    } else {
      setIsValid("Invalid");
    }
  };
  return (
    <div id="contactDiv">
      <div className="leftIcons">
        <div>
          <img src="\logo copy.svg" alt="" className="whiteLogo" />
        </div>
        <div id="socials">
          <FacebookIcon />
          <YouTubeIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="ContactsLinks">
        <div className="middleContacts left">
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
        </div>
        <div className="middleContacts right">
          <a href="#">Careers</a>
          <a href="#">Community</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div id="rightContacts">
        <form onSubmit={EmailValidation}>
          <div>
            <input
              type="text"
              placeholder="Updates in your inbox…"
              value={EmailInput}
              onChange={HandleInput}
              className={IsValid}
            />
            <button className="GoButton">Go</button>
          </div>

          <p className={IsValid == "Invalid" ? "InvalidEmail": "Valided"}>Please insert a valid Email</p>
        </form>
        <p className="CopyrightText">Copyright 2020. All Rights Reserved</p>
      </div>
    </div>
  );
};
