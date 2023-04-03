
import { FaLinkedin,FaGithub,FaFacebookSquare,FaEnvelope,FaInstagram, FaReact } from "react-icons/fa";

function Footer(){
    return (
    <div className='footer'>
        <hr></hr>
        <p className="mb-0">&copy; 2023 Shubha Agrawal</p>
      <a className='icon' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shubha-jindal-agrawal/"><FaLinkedin /></a>
      <a className='icon' target="_blank" rel="noreferrer" href="https://github.com/SA-0601" ><FaGithub /></a>
      <a className='icon' arget="_blank" rel="noreferrer" href="mailto:shubh.cap@gmail.com" ><FaEnvelope /></a>
      <a className='icon' target="_blank" rel="noreferrer" href="https://www.instagram.com/agrawalshubha/" ><FaReact /></a>
      <a className='icon' target="_blank" rel="noreferrer" href="https://www.facebook.com/shubha.agrawal.96/" ><FaFacebookSquare /></a>
    </div>

    )
}
export default Footer;