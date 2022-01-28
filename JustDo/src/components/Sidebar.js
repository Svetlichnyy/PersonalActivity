import React from 'react';
import "./Sidebar.css";
import {ReactComponent as ReactLogo} from "../assets/images/logo.svg"
const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="logo">
            <ReactLogo />
            </div>
            <div className="filter">
                <div className="category">
                    <div className="add-category">

                    </div>
                    <div className="category-items">
                        <p className="category-items text">All</p>
                    </div>
                </div>
                <div className="tags">

                </div>
            </div>
            <h1>im sidebar</h1>
        </div>
    );
};

export default Sidebar;

// import {ReactComponent as ReactLogo} from './logo.svg';

