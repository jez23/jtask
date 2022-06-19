import React from 'react';
import { Link } from "react-router-dom";

const error404: React.FC = () => {
    return (
        <div className="error404">
            <h2>Page not found.</h2>
            <p>THE PAGE YOU WERE LOOKING FOR WAS MOVED OR DOESN'T EXIST.</p>
            <Link to="/"><button className='btn'>Homepage</button></Link>
        </div>
    )
}

export default error404;