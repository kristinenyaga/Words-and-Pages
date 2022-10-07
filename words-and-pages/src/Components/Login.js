
import React,{useContext,useEffect,useState}from 'react';
import {useNavigate} from 'react-router-dom'
import { DetailsContext } from "../Context/Context";


function Login(){
 

    const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
    
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIsLogged(!logIn)
      navigate("words-and-pages/src/Components/Home.js/");

    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
   const navigate=useNavigate()
  const {setIsLogged,logIn} = useContext(DetailsContext);
  
  return (
    <div className="container">
      
      <form onSubmit={handleSubmit}>
       
        <div className="ui divider"></div>
        <div className="login-box">
        <h2>Login Form</h2>
          <div className="user-box">
           
            <input
              type="text"
              name="username"
              placeholder="Username"
              className='input-field'
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="user-box">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className='input-field'
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="user-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="btn btn-dark" >Submit</button>
        </div>
      </form>
    </div>
  );
  
}

export default Login