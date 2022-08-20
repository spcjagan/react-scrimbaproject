import React from 'react'
import ReactDOM from 'react-dom';
import FacebookIcon from '../images/Facebook Icon.png';
import TwitterIcon from '../images/Twitter Icon.png';
import InstagramIcon from '../images/Instagram Icon.png';
import GithubIcon from '../images/GitHub Icon.png';

const Footer = () => {
  return (
    <div className='footer'>
        <img src ={TwitterIcon} className="twitter-icon"/>
        <img src ={FacebookIcon} className="facebook-icon"/>
        <img src ={InstagramIcon} className="instagram-icon"/>
        <img src ={GithubIcon} className="github-icon"/>
    </div>
  )
}

export default Footer