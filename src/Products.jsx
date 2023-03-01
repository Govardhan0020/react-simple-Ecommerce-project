import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { MdAccountCircle  } from "react-icons/md";


const Products = () => {
  const [apiData, setApiData] = useState([])
  const [searchProduct, setSearchProduct] = useState("")

  const navigate = useNavigate();
  const Receivedname = useLocation()
  console.log(Receivedname.state, "1111")

  const displayName = Receivedname.state;

  localStorage.setItem("username", JSON.stringify(displayName))


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(out => setApiData(out))
  }, [])



  function cart(getitem) {
    navigate("/details", { state: getitem })
  }


  function SignupPage() {
    navigate("/signup")
  }

  function signinPage() {
    navigate("/")
  }

  function Logout() {
    navigate("/")
  }

  const filtered = apiData.filter((item) => item.category.includes(searchProduct))

  console.log(filtered, "filterddata")
  return (
    <div>
      <div className='namedisplay'>
        <h4> <MdAccountCircle />  Hi, {displayName} </h4>

      </div>

      <div className='productheader'>
        <div className='navheader'>
          <div className='logo'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglu3ChzAfX5yRvHOv81wjfBcxIsJiEMfD1g&usqp=CAU" alt='flipkartimage' id="flipkartlogo" />
          </div>
          <div className='search'>
            <label> search :</label> <input type="search" placeholder="search the item "
              onChange={(e) => setSearchProduct(e.target.value)} value={searchProduct} />
          </div>
          <div className='signbtns'>
            <button className='btnsign' onClick={() => SignupPage()}> Sign Up </button>
            <button className='btnsign' onClick={() => signinPage()}> Sign In </button>
            <button className='btnsign' onClick={() => Logout()}> Sign Out </button>
          </div>
        </div>
      </div>


      <div className='flexdisplay'>
        {
          filtered.map((item) =>
            <div onClick={() => cart(item)} id="card" key={item.id}>
              <img src={item.image} alt="img" />
              <h6> {item.title} </h6>
              <p> <b>  Price : {item.price} $.  </b> </p>
              <button className='cart' > ADD Cart  </button>
            </div>
          )}

      </div>

    </div>
  )
}
export default Products;