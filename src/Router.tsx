
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import React from "react";
import { CategoryContent } from "./components/CategoryPage/collectioncontent/CategoryContent";
import { LoginPage } from "./components/LoginPage/loginpage";
import { SignUpPage } from "./components/SignUpPage/SignUpPage";
import ProductPage from "./components/ProductPage/ProductPage";
import { HomeContent } from "./components/HomePage/homecontent/HomeContent";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomeContent />
      </Layout>
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
    path: "/product/:id",
    element: (
      <Layout>
        <ProductPage/>
      </Layout>
    ),
  },
  {
    path: "/login",
    element:(
     <LoginPage/> 
    )
  },
]);