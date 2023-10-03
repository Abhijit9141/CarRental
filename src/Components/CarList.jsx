import "../Styles/CarList.css"

function CarList(props) {
   console.log(props.cars)
    return (
        <div className="car-list-comp-box">    
            <img src={props.car} alt="" srcset="" />
            <p>
                Mercedes Benze
            </p>
               <p>
                4 people
            </p>
               <p>
               automatic
            </p>
            
            <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between"  }}>
                <div>620$ /month</div><div style={{display:"flex"}}> <button style={{backgroundColor:"#DAEAFA" ,width:"50px",border:"none",borderRadius:"10px", color:"white", fontWeight:"bold"}}>heart</button> <button style={{backgroundColor:"#499AEC" ,width:"100px",border:"none",borderRadius:"10px", color:"white", fontWeight:"bold"}}>Rent now</button>
            </div></div>
    </div> );
}

export default CarList;