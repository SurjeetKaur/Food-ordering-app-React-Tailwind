import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Corporate from "./components/Corporate";
import ErrorHandling from "./components/ErrorHandling";
import RestaurantMenu from "./components/RestaurantMenu";
import './index.css';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const Grocery=lazy(()=>import("./components/Grocery"));

// applayout component contains static and dynamic pages
const AppLayout = () => {
    return (
        <Provider store={appStore}>  {/* connect store to app for cart*/}
            <>
                <Header />
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
                path: "corporate",
                element: <Corporate />
            },
            
            // {
            //      path: "help",
            //     element: <Help />
            // },
            {
                path:"grocery",
                element: <Suspense fallback={<div>Loading...</div>}> 
                             <Grocery businessName="vegetables Grocery"/>
                         </Suspense>

            },
            {
                path: "restaurantMenu/:restaurantId",
                element: <RestaurantMenu />
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