// Import necessary modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Counter from "./page/Counter.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import NavbarComponet from "./components/navbar/Navbar.jsx";
import NotFounde from "./page/notFounde/NotFounde.jsx";
import Layout from "./components/navbar/Layout.jsx";
import Customer from "./page/Customer.jsx";
import ProductDetail from "./page/ProductDetail.jsx";
import StaffType from "./page/StaffType.jsx";
import AddToCart from "./page/AddToCart.jsx";
import Register from "./page/auth/register/Register.jsx";
import Dashboard from "./page/dastboat/Dashboard.jsx";
import ProductDashBord from "./page/dastboat/ProductDashBord.jsx";
import HomePages from "./page/homePage/HomePages.jsx";
import ProductDetailCard from "./components/product/ProductDetailCard.jsx";
import ProductCafeDetailCard from "./components/productCaffeeComponets/ProductCafeDetailCard.jsx";
import ProductCafeDetail from "./page/productCaffee/ProductCafeDetail.jsx";
import ProductDashBordCafe from "./page/productCaffee/ProductDashBordCafe.jsx";
import ProductCafeCreateform from "./page/productCaffee/ProductCafeCreateform.jsx";
import ViewProductOnDashBord from "./page/productCaffee/dashBordCafe/viewProductOnDashBord.jsx";
import UpdateProductOnDashBord from "./page/productCaffee/dashBordCafe/UpdateProductOnDashBord.jsx";
import CategoryDashBord from "./page/category/darshBordCategory/CategoryDashBord.jsx";
import ViewCategoryPage from "./page/category/ViewCategoryPage.jsx";
import CartCategoryCardDashBord from "./components/categoryComponts/CartCategoryCardDashBord.jsx";
import CreateCategorydashbord from "./page/category/darshBordCategory/CreateCategorydashbord.jsx";
import UpdateCategorydashbord from "./page/category/darshBordCategory/UpdateCategorydashbord.jsx";
// Set up the router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Main App component as the root route
    errorElement: <NotFounde />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "product",
        element: <App />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/:codeProduct",
        element: <ProductCafeDetail/>
      },
      {
        path: "counter",
        element: <Counter />, // Counter page as a separate route
      },
      {
        path: "customer",
        element: <Customer />, // Customer page
      },
      {
        path: "staffType",
        element: <StaffType />, // StaffType page
      },
      {
        path: "addToCart",
        element: <AddToCart />, // AddToCart page
      },
      {
        path: "register",
        element: <Register />, // Register page
      },
      {
        path: "lola",
        element: <App/>
      },
      {
        path: "dashboard",
        element: <Dashboard />, // Dashboard page with children
        errorElement: <NotFounde />,
        children: [
          {
            path: "productDashBoard", // This must be a relative path
            element: <ProductDashBord/>,
           // element: <Customer/>
          },
          {
            path: "productDashBordCafe", // This must be a relative path
            element: <ProductDashBordCafe/>,
           // element: <ProductDashBord/>
          },
          {
            path:"categoryDashBord", 
            element: <CategoryDashBord/>, 
          },
          {
            path:"productDashBordCafe/viewProductOnDashBord/:codeProduct", // This must be
            element: <ViewProductOnDashBord/>, // ProductCafeDetailCard component as a separate route
          },
          {
            path:"productDashBordCafe/viewCategoryPage/:codeCategory", // This must be
            element: <ViewCategoryPage/>, // ProductCafeDetailCard component as a separate route
          },
          {
            path:"productDashBordCafe/productCafeCreateform", // This must be
            element: <ProductCafeCreateform/>,
          },
          {
            path:"categoryDashBord/createCategorydashbord/", // This must be
            element: <CreateCategorydashbord/>, // ProductCafeDetailCard component as a separate route
          },
          {
            path:"productDashBordCafe/updateProductOnDashBord/:codeProduct", // This must be
            element: <UpdateProductOnDashBord/>, // ProductCafeDetailCard component as a separate route
          },
          {
            path:"categoryDashBord/updateCategorydashbord/:codeCategory", // This must be
            element: <UpdateCategorydashbord/>, // ProductCafeDetailCard component as a separate route
          }

        ],
      },
    ],
  },
]);



// Render the application with Providers
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
