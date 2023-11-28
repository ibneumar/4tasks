import React from "react";

const Footer = () => {
    return (
        <footer className="p-3 text-center bg-primary text-light">
            All Rights Reserved &copy; {new Date().getFullYear()}
        </footer>
    )
}

export default Footer;