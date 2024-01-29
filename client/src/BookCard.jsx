import "./assets/css/BookCard.css";

function BookCard({post,onClick}) {
    return (
      <div className="card-details">
        <h1 className="header">Book details!</h1>
        <div className="main-box">
            <h1 className="form-head">Display title here</h1>
            <div className="info-disp center-align">
                <div className="image-display">display image here</div>
                <p className="author-disp">Author:  display author here</p>
                <p className="para-disp">display reviews here</p>
            </div>
            <h1 className="form-head">Owner Details:</h1>
            <div className="info-disp">
                <p className="para-disp">Name: display name</p>
                <p className="para-disp">Contact: display contact</p>
                <p className="para-disp">Mail Id: display mail id</p>
            </div>
            <h1 className="form-head">Checkout</h1>
            <div className="info-disp center-align">
                <button className="checkout-button para-disp rent">Rent now</button>
                <button className="checkout-button para-disp del">Delete from records</button>
            </div>
        </div>
      </div>
    )
  }
  
  export default BookCard