import {useContext, useState} from "react";
import axios from "axios";
import "./assets/css/addBook.css";


export default function AddBook() {
  const [title , setTitle] = useState("");
  const [author , setAuthor] = useState("");
  const [image , setImage] = useState("");
  const [rate , setRate] = useState("");
  const [name , setName] = useState("");
  const [mobile , setMobile] = useState("");
  const [email , setEmail] = useState("");
  const [review , setReview] = useState("");
 
  const details = {
    title,
    author,
    // image,
    review,
    rate,
    name,
    mobile,
    email,
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const {data} = await axios.post("addBook", details);  
  }
  
  return (
    <div className="input-new-book">
    <h1 className="header">Add New Book</h1>
    <div className="main-box">
        <form  onSubmit={handleSubmit} method="post">
            <div className="book-details">
                <h1 className="form-head">Book Details</h1>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" className="book-input" placeholder="Enter title"
                onChange={ev => setTitle(ev.target.value)}></input><br/>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" name="author" className="book-input" placeholder="Enter author name"
                 onChange={ev => setAuthor(ev.target.value)}></input><br/>
                <label htmlFor="image_uploads">Image</label>
                <input type="file" id="image_uploads" name="image_uploads" accept="image/*,.pdf" multiple
                 onChange={ev => setImage(ev.target.value)}></input><p id="imageHint">(choose image from files)</p><br/>
                <label htmlFor="reviews">Reviews</label>
                <textarea id="reviews" name="reviews"
                 onChange={ev => setReview(ev.target.value)}></textarea><br/>
                <label htmlFor="rate">Rate per month</label>
                <input type="number" id="rate" name="rate" className="book-input" placeholder="Eg: 10" 
                 onChange={ev => setRate(ev.target.value)}></input>
            </div>
            <div className="contact-details">
                <h1 className="form-head">Contact Details</h1>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="book-input" placeholder="Enter name"
                 onChange={ev => setName(ev.target.value)}></input><br/>
                <label htmlFor="mobile">Mobile number</label>
                <input type="number" id="mobile" name="mobile" className="book-input" placeholder="Enter mobile number"
                 onChange={ev => setMobile(ev.target.value)}></input><br/>
                <label htmlFor="mail_id">Mail Id</label>
                <input type="email" id="mail_id" name="mail_id"
                 onChange={ev => setEmail(ev.target.value)}></input><br/>
                <input type="submit" className="button"></input>
            </div>
        </form>
    </div>
</div>

  );
}
