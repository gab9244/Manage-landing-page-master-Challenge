import { Button } from "./Button";
import { HamburgeMenu } from "./HamburgeMenu";
export const Header = () => {
  return (
    <>
     <header>
      <img src="\images\logo.svg" className = "Logo" alt="" />
      <div id="links">
          <a href="#LeftSide">Pricing</a>
          <a href="#leftSide">Product</a>
          <a href="#review">About Us</a>
          <a href="#simplifyMain">Careers</a>
          <a href="#contactDiv">Community</a>
      </div>
      <HamburgeMenu />

    <Button />
    <img src="\images\bg-tablet-pattern.svg" alt="" id="tablePattern"/>
    </header>

   
    </>
   
  );
};
