'use client';
import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginBtn = () => {
  return (
    <GoogleOAuthProvider
      clientId={String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)}
    >
      <GoogleLogin
        onSuccess={(res:any)=> console.log(res)}
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