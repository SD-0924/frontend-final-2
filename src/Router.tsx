
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import React from "react";
import { HomeContent } from "./components/HomePage/homecontent/HomeContent";
import { CategoryContent} from "./components/CategoryPage/collectioncontent/CategoryContent";
import { LoginPage } from "./components/LoginPage/loginpage";
import { productsLoader } from "./components/CategoryPage/announcmentshero/AnnouncmentsHero";


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
  }
]);