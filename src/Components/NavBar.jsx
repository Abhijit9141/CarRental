import "../Styles/NavBar.css"
function NavBar() {
    return (
      
        <div className="navbar">
            <div className="navabar-flex" style={{display:"flex",wordSpacing:"0.3em" } }>
                <input type="text" placeholder="search your car here..." />
                <p style={{paddingTop:"0.9em" , paddingLeft:"0.5em"}}>relevance</p>
                <p style={{paddingTop:"0.9em"}}>All Brands </p>
               </div>
            </div>

           );
}

export default NavBar;