import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import ErrorHandling from "./components/ErrorHandling";
import RestaurantMenu from "./components/RestaurantMenu";
import './index.css';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from"./components/Cart";


const Grocery=lazy(()=>import("./components/Grocery"));

// applayout component contains static and dynamic pages
const AppLayout = () => {
    return (
        <Provider store={appStore}>  {/* connect store to app for cart*/}
            <>
                <Header />
                <div className="pt-[100px]"></div>
                <Outlet />    {/*dynamic component */}
                <Footer />
            </>
        </Provider>
    )
}

// routing configuration

const appRouter = createBrowserRouter([
    {
        path: "",
        element: <AppLayout />,
        errorElement: <ErrorHandling />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "aboutus",
                element: <AboutUs />
            },
            
            {
                 path: "contact",
                element: <Contact />
            },
            {
                path:"grocery",
                element: <Suspense fallback={<div className="items-center justify-center text-3xl p-4">Loading......</div>}> 
                             <Grocery businessName="Vegetables"/>
                         </Suspense>

            },
            {
                path: "restaurantMenu/:restaurantId",
                element: <RestaurantMenu />,
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);




//previous code

// root.render(
//     <>
//         <Header />
//         <Body />
//         <Footer />
//     </>);