import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function UpdatePrice() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [price, setPrice] = useState(state.updatedPrice);
  console.log("price==> ", state ? state : "Not found")
  const submitHandler =(e) => {
    e.preventDefault();
    fetch('http://localhost:8800/api/bookmyshow/updatePrice', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "theaterId": state.theaterId,
        "movieId": state.movieId,
        "ownerName": state.ownerName,
        "updatedPrice": price
      })
   });
   
   navigate("/");
   window.location.reload(false);
   
  }
  return (
    <div>
        <form onSubmit={submitHandler}>
          <h1>Hello</h1>
          <table>
            <tr>
              <td>Theater Name</td><td>{state.theaterName}</td>
            </tr>
            <tr>
              <td>Movie Name</td><td>{state.movieName}</td>
            </tr>
            <tr>
              <td>Screen Name</td><td>{state.screenName}</td>
            </tr>
            <tr>
              <td>Ticket Price</td><input type="test" 
                name="updatedPrice"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                ></input><td></td>
            </tr>
          </table>
          <input type="submit" />
        </form>
    </div>
  )
}

export default UpdatePrice