import React, {useState}  from "react";
import axios from "axios";
const Contact = () => {
  
    const [user, setUser] = useState({
      fullname: "",
      email: "",
      message:"",
    });
    console.log(user)
    
    
    const InputEvent = (event) => {
      const { name, value } = event.target;
      setUser({ 
          ...user,
          [name]: value,
       
      });
    };
    
  const postData = (e)=>{
    e.preventDefault();
    const {fullname,email,message} = user;
    if(fullname &&  email && message){
      axios.post('http://localhost:8001/contact',user)
      .then(res=> console.log(res));
  
      alert("successfully done");
    }else{
      alert("Invalid input");
    }
   
  }
  
    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className=" container-fluid contact_div">
          <div className="row">
            <div className="col-md-6 col-10 max-auto">
            <form >
                <div className="mb-3 ">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={user.fullname}
                    onChange={InputEvent}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={user.email}
                    onChange={InputEvent}
                    placeholder="Enter your Email"
                  />
                </div>
  
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="message"
                    value={user.message}
                    onChange={InputEvent}
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit" onClick = {postData} >
                    Submit 
                  </button>
  
                </div>
  
              </form>
              
            </div>
            <div>
  
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Contact;
  