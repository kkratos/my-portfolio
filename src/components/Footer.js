import React from 'react';

function Footer() {
    return (
        <div className="m-10 p-10">
            <footer className="w-9/12 flex m-auto justify-center">
                <div className="flex justify-center" >
                    <p>Build with <a href="https://www.gatsbyjs.com/" className="text-red-500 font-semibold hover:underline"> Gatsby.</a> Data from <a href="https://www.sanity.io" className="text-red-500 font-semibold hover:underline">Sanity.io</a>. Hosted on <a href="https://www.netlify.com" className="text-red-500 font-semibold hover:underline">Netlify.</a></p></div>
            </footer>
        </div>
    );
}

export default Footer;