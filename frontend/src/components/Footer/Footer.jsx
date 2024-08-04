import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque a aliquam soluta excepturi nihil. Quae neque sunt est iusto dignissimos maxime esse. Voluptatum facere debitis esse quaerat consequatur distinctio?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />


                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 7784973216</li>
                        <li>abhijeetsingh250.as@gmail.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 © ajdhaba.com All Right Reserved.
            </p>
        </div>
    )
}

export default Footer
