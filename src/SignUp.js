import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    age: '',
  });

  const { firstname, lastname, email, password, age } = data;

  const HandlerChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const locldata = JSON.parse(localStorage.getItem('userdetails')) || [];
       console.log(locldata, "locdata")
  const name = data.firstname;
  console.log(name, '2525');
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (firstname && lastname && age && email && password !== '') {
      localStorage.setItem('userdetails', JSON.stringify([...locldata, data]));

      navigate('/products', { state: name });
      setData({
        firstname: '',
        lastname: '',
        age: '',
        email: '',
        password: '',
      });
      console.log(data, ' signup');
    } else {
      alert('please fill the input fields properly ');
    }
  };

  return (
    <div className="signupform">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglu3ChzAfX5yRvHOv81wjfBcxIsJiEMfD1g&usqp=CAU"
          alt="flipkartimage"
          id="flipkartimage"
        />
      </div>

      <h4 className="signupheader"> Sign Up form </h4>

      <form onSubmit={SubmitHandler}>
        <div className="input-container">
          <label> First Name : </label>
          <input
            type="text"
            placeholder="enter your first name"
            name="firstname"
            value={firstname}
            onChange={HandlerChange}
            required
          />
        </div>
        <div className="input-container">
          <label> Last Name : </label>
          <input
            type="text"
            placeholder="enter your last name "
            name="lastname"
            value={lastname}
            onChange={HandlerChange}
            required
          />
        </div>
        <div className="input-container">
          <label> Email ID : </label>
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            value={email}
            onChange={HandlerChange}
            required
          />
        </div>
        <div className="input-container">
          <label> Password :</label>
          <input
            type="password"
            placeholder="enter your password "
            name="password"
            value={password}
            onChange={HandlerChange}
            required
          />
        </div>
        <div className="input-container">
          <label> Age : </label>
          <input
            type="text"
            placeholder="enter your age "
            name="age"
            value={age}
            onChange={HandlerChange}
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
