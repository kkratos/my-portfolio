import React from 'react';
import { SocialIcon } from "react-social-icons";

function Footer() {
    return (
        <div className="px-3 py-5 md:m-10 md:p-10">
            <div className="flex justify-center mb-2 md:hidden">
                <SocialIcon
                    url="https://twitter.com/iamkamalpatel"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 25, width: 25 }}
                />
                <SocialIcon
                    url="https://github.com/kkratos"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    bgColor="#000"
                    style={{ height: 25, width: 25 }}
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/kamalpatel/"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 25, width: 25 }}
                />
            </div>
            <footer className="lg:w-9/12 flex m-auto justify-center">
                <div className="flex justify-center" >
                    <p className="text-sm text-center md:text-lg">Build with <a href="https://www.gatsbyjs.com/" className="text-red-500 font-semibold hover:underline"> Gatsby.</a> Data from <a href="https://www.sanity.io" className="text-red-500 font-semibold hover:underline">Sanity.io</a>. Hosted on <a href="https://www.netlify.com" className="text-red-500 font-semibold hover:underline">Netlify.</a></p></div>
            </footer>
        </div>
    );
}

export default Footer;