import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
function Footer(){
    return (
    <div className='footer'>
        <hr></hr>
        <p>Made by <span>Shubha Agrawal</span></p>
        
      <a className='icon' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shubha-jindal-agrawal/"><LinkedInIcon color="black" fontSize="large"/></a>
      <a className='icon' target="_blank" rel="noreferrer" href="https://github.com/SA-0601" ><GitHubIcon color="black" fontSize="large"/></a>
      <a className='icon' arget="_blank" rel="noreferrer" href="mailto:shubh.cap@gmail.com" ><EmailIcon color="black" fontSize="large"/></a>
     
    {/* not ready to take any local file */}
      {/* <a href="https://github.com/SA-0601">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          color="red"
          width="50"
          height="50"
          alt="GitHub"
        ></img>
      </a>
      */}
    </div>

    )
}
export default Footer;