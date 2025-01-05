import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import Main from "./Layout/Main";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddService from "./Components/AddService";
import ServiceList from "./Components/ServiceList";
import PrivateRoute from "./PrivateLayout/PrivateRoute";
import MyService from "./Components/MyService";
import Details from "./Components/Details";
import ShowReview from "./Components/ShowReview";
import MyReviews from "./Components/MyReviews";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader:()=>fetch("http://localhost:5000/service/top-six"),
      },
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
      {
        path: '/add-service',
        element: <PrivateRoute><AddService /></PrivateRoute>,
      },
      {
        path: '/services',
        element: <ServiceList />,
        loader:()=>fetch("http://localhost:5000/services"),
      },
      {
        path: "/my-service/:email", 
        element: <PrivateRoute>
        <MyService />
        </PrivateRoute>,
        loader: ({ params }) =>    fetch(`http://localhost:5000/services?addedBy=${params.email}`),
      },
      {
        path: "/services/:id", 
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/my-reviews/:email", 
        element: <PrivateRoute>
        <MyReviews />
        </PrivateRoute>,
        loader: ({ params }) =>   fetch(`http://localhost:5000/reviews?email=${params.email}`),
      },
      
    ],
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
