import React from "react";
import ReactTwitterLogin from "react-twitter-login";



export default function TwitterLogin() {
  const authHandler = (error, data) => {
    if (error) return console.error(error);
    console.log(data);
  };
  return (
    <ReactTwitterLogin
      authCallback={authHandler}
      consumerKey={"cLqU4tAdEndO1vQTXz7lfdrmU"} // We created this, remember?
      consumerSecret={"ewxLuuTF8GxMJRwh80RV0GDQHo9KGbVPdYwVJAtVqSfD2xmOZq"} // We created this, remember?
      //callbackUrl="http://127.0.0.1/auth/twitter/callback"  
    
    />
  );
}

 