
import "../Styles/CarsComp.css"
import CarList from "./CarList";
import "../App.css"
import { useState } from "react";
import { data } from "../cars";
import BottomAppBar from "./BottomAppBar";
import NavBar from "./NavBar";
function CarsComponent() {
    console.log(data)
    const [pageCarsCount, setPageCarsCount] = useState(5)
    const [pagination, setPagination] = useState(1)
    
    function moveForward() {
        console.log(pageCarsCount)
         if(pageCarsCount>data.length-1) return
        setPageCarsCount(pageCarsCount + 5)
       
  }

    function moveBackward() {
           if(pageCarsCount>0) return
        setPageCarsCount(pageCarsCount - 5)
     
  }

    return (
        
        <div className="Container">
            <NavBar/>
            <div className="display-grid">
                {
                    data.slice(pageCarsCount).map((cars, index) => {
                        if(index>5) return
                        return <div>
                            <CarList car={cars.image} />    
                        </div>
                    })
                }
            </div>
            {/* <button onClick={moveBackward}>{"<" }</button>
            {
                    data.map((pagination, i) => {
                        if (i > 8) return
                        return i === 5 ? <button>...</button> : <button onClick={()=>setPageCarsCount({from:i,to:5})}>{i}</button>
                    })
            }
             <button onClick={moveForward}>{">" }</button> */}
            
            <BottomAppBar/>
         </div>
              );
}

export default CarsComponent;
