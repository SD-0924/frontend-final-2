// @ts-ignore
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import React from "react";
import { HomeContent } from "./components/homecontent/homecontent";
export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
            <HomeContent/>
        </Layout>
      ),
    },
  ]);