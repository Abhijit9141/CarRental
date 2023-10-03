import "../Styles/BottomAppBar.css"
import { data } from "../cars";
function BottomAppBar() {
    
    return (

    <div className="bottom-app">
<div className="display-bottom-flex"  >
                   <p style={{ justifyContent:"start"}}>6 from 129</p>
                    <div className="pagination-box"> 
                    </div>    
                      {
                    data.map((pagination, i) => {
                        if (i > 8) return
                        return i === 5 ? <button>...</button> : <button >{i}</button>
                    })
                }
                </div>
    </div>
);
}

export default BottomAppBar;