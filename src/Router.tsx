
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import React from "react";
import SignUpForm from "./components/RegistrationPages/SignUp/SignUpForm";
import { CategoryContent } from "./components/CategoryPage/collectioncontent/CategoryContent";
import { LoginPage } from "./components/LoginPage/loginpage";
import { CartContent } from "./components/CartPage/cartcontent/cartcontent";
import { HomeContent } from "./components/HomePage/homecontent/HomeContent";
import { productsLoader } from "./components/productsloader";



export const router = createBrowserRouter([
  
  {
    path: "/signup",
    element: (
      <SignUpForm />
    ),
  },
  {
    path: "/",
    element: (
      <Layout>
        <HomeContent />
      </Layout>
    ),
  },
  {
    path: "/:type/:name",
    // loader: productsLoader,
    element: (
      <Layout>
        <CategoryContent />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <LoginPage />
    )
  },
  {
    path: "/mycart",
    element: (
      <Layout>
        <CartContent />
      </Layout>
    )
  }
]);
