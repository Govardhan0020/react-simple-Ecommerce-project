import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetdails = () => {
  const navigate = useNavigate()
  const x = useLocation()

  console.log(x.state)

  const UserName = JSON.parse(localStorage.getItem("username"))

  console.log(UserName, "1212")


  function close() {
    navigate("/products", { state: UserName })
  }


  return (
    <div>
      <div key={x.state.id} className="container-fluid mt-1  p-5" id="flexcard" >
        <div className="row">
          <div className="col-sm-4">
            <img src={x.state.image} alt="img" style={{ height: "340px", width: "320px" }} />
          </div>
          <div className="col-sm-8" id="productdetails">
            <h5> {x.state.title} </h5>
            <p><b>  Price :</b> <b> <small>   {x.state.price} $.   </small>  </b> </p>
            <p><b> category : </b>   <b> <small>  {x.state.category} </small>   </b></p>
            <div>  <h6><b>   Description : </b> </h6> <b> <small>  {x.state.description}  </small> </b> </div>
            <p><b> Rating :</b> <b> <small> {x.state.rating.rate}  </small> </b>  </p>
            <p><b>  Count  :</b> <b> <small> {x.state.rating.count}  </small> </b>  </p>
            <div className="mt-4" style={{ display: "flex", justifyContent: "space-evenly" }}>
              <button className="btn btn-warning  p-2 "> BUY NOW </button>
              <button className="btn btn-light p-2"> ADD CART</button>
              <button className="btn btn-danger p-2" onClick={() => close()}> CLOSE </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
export default ProductDetdails;

