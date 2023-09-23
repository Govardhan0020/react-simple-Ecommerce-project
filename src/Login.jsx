import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const localdata = JSON.parse(localStorage.getItem('userdetails')) || [];

  console.log(localdata, '1616');

  const changepage = () => {
    navigate('/signup');
  };

  const { name, email, password } = data;

  const HandlerChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(data, 'loginpage');

    const clientdata = localdata.find((item) => item.email === data.email);
    if (data !== null) {
      if (
        clientdata.email === data.email &&
        clientdata.password === data.password
      ) {
        const name = clientdata.firstname;
        console.log(name, 'name cli ');
        navigate('/products', { state: name });
      } else {
        alert(' your date is not found,  please signup...  ');
      }
      console.log(clientdata, '3535');
      console.log(clientdata.email, 'cliemail');
      setData({
        name: '',
        email: '',
        password: '',
      });
    } else {
      alert(' your Details are not found ');
    }
  };

  return (
    <div className="loginpage">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglu3ChzAfX5yRvHOv81wjfBcxIsJiEMfD1g&usqp=CAU"
          alt="flipkartimage"
          id="flipkartimage"
        />
      </div>

      <h4 className="loginheader"> Sign In </h4>

      <form onSubmit={SubmitHandler}>
        <div className="input-container">
          <label> Name : </label>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            value={name}
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
        <div className="button-container">
          <input type="submit" value="submit" />
        </div>
      </form>
      <button id="signupbtn" onClick={() => changepage()}>
        Sign Up{' '}
      </button>
    </div>
  );
};

export default Login;
