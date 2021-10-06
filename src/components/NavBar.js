import React from "react";

class NavBar extends React.Component {
    render() { 
        return(
            <div className="nav">
                <div className="search-container">
                    <input type="text"/>
                    <button id="search-btn">Search</button>
                </div>
            </div>
        );
    }
}
 
export default NavBar;