import HeaderImg from '../assets/images/illustration-hero.svg';
import '../App.css';

function Header(){
   return (
         <img 
            src={HeaderImg}
            alt=""
            className="HeaderImg"
         />
   )
}
export default Header;