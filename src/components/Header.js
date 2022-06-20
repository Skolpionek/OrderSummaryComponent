import HeaderImg from '../assets/images/illustration-hero.svg';
import '../App.css';

function Header(){
   return (
      <div>
         <img 
            src={HeaderImg}
            alt=""
            className="HeaderImg"
         />
      </div>
   )
}
export default Header;