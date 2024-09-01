import { useState } from "react";

export const HamburgeMenu = () => {
  const [show, setShow] = useState(false);
  const ShowMenu = () => {
    setShow(!show);
  };
  return (
    <div className="mobileMenu" >
      
        <img
          src={ !show ? `/images/icon-hamburger.svg` : "/images/icon-close.svg"}
          alt="A hamburger menu"
          className="mobile"
          onClick={ShowMenu}
        />
   

      <div className={show === true ? "Hamburgerlinks" : "disappear"}>
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </div>
    </div>
  );
};
