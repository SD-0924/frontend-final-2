
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import React from "react";
import { HomeContent } from "./components/homecontent/HomeContent";
import { CollectionsContent } from "./components/collectioncontent/CollectionContent";


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
  }
]);