'use client';
import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { decode } from 'jsonwebtoken';
import Cookies from "js-cookie";

const GoogleLoginBtn = () => {

  const handleGoogleLogin = (res: any) => {
    const credential = res.credential;
    Cookies.set("token", credential);
    window.location.href = "/";
  }

  return (
    <GoogleOAuthProvider
      clientId={String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)}
    >
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => alert("Gagal Login, harap coba lagi")}
        logo_alignment="left"
        shape="rectangular"
        size="large"
        text="signin_with"
        width="350px"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginBtn;