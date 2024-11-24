
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import React from "react";
import SignUpForm from "./components/RegistrationPages/SignUp/SignUpForm";
import { CategoryContent } from "./components/CategoryPage/collectioncontent/CategoryContent";
import { LoginPage } from "./components/LoginPage/loginpage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <Layout>
      //   <HomeContent />
      // </Layout>
      <SignUpForm/>
    ),
  },
  {
    path: "/category/:name",
    // loader: productsLoader,
    element: (
      <Layout>
        <CategoryContent />  
      </Layout>
    ),
  },
  {
    path: "/login",
    element:(
     <LoginPage/> 
    )
  }
]);