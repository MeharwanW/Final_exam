import "./Header.css"
import imgs1 from "./../assets/images/1.svg"
import imgs2 from "./../assets/images/2.svg"
import imgs3 from "./../assets/images/3.svg"
export default function Header() {
    return (
        <div className="nav container">
        <div class="logo-title">
        <h1>Grace</h1>
      </div>
  
      <div class="menu">
        <a href="#" class="active">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </div>
  
      <div class="icons">
        <img src={imgs1} alt="" />
        <img src={imgs2} alt="Icon 2" />
        <img src={imgs3} alt="Icon 2" />
      </div>
        </div>
    );
}
