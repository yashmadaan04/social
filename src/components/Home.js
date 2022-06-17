import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "../Assets/Home.css";
import SocialButton from "./SocialButton";
import TwitterLogin from "./TwitterLogin";
 
 
const handleSocialLogin = (user) => {

  
  //localStorage.setItem("user",user);
   console.log(user);
};

const handleSocialLoginFailure = (err) => {
  console.error(err);
};
const SocialLogin = (user) => {

   
   console.log(user);
};

const SocialLoginFailure = (err) => {
  console.error(err);
};
 
 
 


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div className="main"> 
      <div className="box1">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="box2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      </div>
       <div className="post">
    
       <SocialButton
      provider="facebook"
      appId="733289641247024"
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
        >
      Login with Facebook
    </SocialButton>
             
        <br></br>
        <br></br>
    
        <TwitterLogin />
        <br></br>
        <br></br>
        <SocialButton
      provider="instagram"
      appId="419018976788406"
      onLoginSuccess={SocialLogin}
      onLoginFailure={SocialLoginFailure}
        >
      Login with instagram
    </SocialButton>
 

       </div>
      
    </>
  );
};

export default Home;
