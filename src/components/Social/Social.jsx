import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
    render() {
        return (
            <div className="socialbar">
                <a href="mailto:liviawijayanti@gmail.com"><img alt="email" src="https://img.icons8.com/material/30/000000/important-mail.png" /></a>
                <a href="https://linkedin.com/in/livia-wijayanti/" target="_blank" rel="noopener noreferrer"><img alt="linkedin" src="https://img.icons8.com/material/30/000000/linkedin--v1.png" /></a>
                <a href="https://github.com/liviaw" target="_blank" rel="noopener noreferrer"><img alt="github" src="https://img.icons8.com/material/30/000000/github.png" /></a>
            </div>
        );
    }
}

export default Social;