import HeaderImg from '../assets/images/illustration-hero.svg';
import '../App.css';

function Header(){
   return (
      <header>
         <img 
            src={HeaderImg}
            alt=""
            className="HeaderImg"
         />
      </header>
   )
}
export default Header;