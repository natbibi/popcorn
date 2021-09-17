import React from "react";

const Footer = () => (
    <footer className="ui inverted vertical footer segment" style={{ position: "fixed", width: "100%", bottom: "0", left: "0", textAlign: "center", zIndex: 2 }}>
        <div className="logo"/>
        <p>
            Made with ✨ by{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/natbibi">
                Natalie
            </a>
        </p>
    </footer>
);

export default Footer;
