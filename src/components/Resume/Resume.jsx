import * as React from 'react';
import resume from './Resume.pdf'
import "./Resume.css";

class Resume extends React.Component{
    render(){
        return(
            <div className="body">
                <h1 className="page-title">RESUME</h1>
                <div className="resume-body">
                    <iframe src={resume} width="90%" height="90%" title="Resume">
                        This browser does not support PDFs. Please download the PDF to view it: Download PDF
                    </iframe>
                </div>
            </div>
        )
    }
}
export default Resume;