
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import React from "react";
import { HomeContent } from "./components/HomePage/homecontent/HomeContent";
import { CategoryContent} from "./components/CategoryPage/collectioncontent/CategoryContent";
import { LoginPage } from "./components/LoginPage/loginpage";
import { productsLoader } from "./components/CategoryPage/announcmentshero/AnnouncmentsHero";
import { CartContent } from "./components/CartPage/cartcontent/cartcontent";


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
    path: "/login",
    element:(
     <LoginPage/> 
    )
  },
  {
    path: "/mycart",
    element:(
      <Layout>
        <CartContent/>
      </Layout>
    )
  }
]);