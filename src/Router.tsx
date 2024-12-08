
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import React from "react";
import SignUpForm from "./components/RegistrationPages/SignUp/SignUpForm";
import { CategoryContent } from "./components/CategoryPage/collectioncontent/CategoryContent";
import { CartContent } from "./components/CartPage/cartcontent/cartcontent";
import { HomeContent } from "./components/HomePage/homecontent/HomeContent";
import { LoginPage } from "./components/RegistrationPages/LoginPage/loginpage";
import ProductPage from "./components/ProductPage/ProductPage";
import CheckoutPage from "./components/CheckOutPage/CheckoutPage";


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
  },{
    path: "/checkout",
    element: (
      <Layout>
        <CheckoutPage />
      </Layout>
    )
  },
  {
    path: "/product/:id",
    element: (
      <Layout>
        <ProductPage />
      </Layout>
    )
  },
]);
