
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import React from "react";
import { HomeContent } from "./components/HomePage/homecontent/HomeContent";
import { CollectionsContent } from "./components/HomePage/collectioncontent/CollectionContent";
import { LoginPage } from "./components/LoginPage/loginpage";


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
    path: "/collections/:name",
    element: (
      <Layout>
        <CollectionsContent />  
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