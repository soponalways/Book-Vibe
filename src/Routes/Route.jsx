import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Books/Books";
import BookDetails from "../Pages/BookDetails/BookDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                // loader: () => fetch("./booksData.json"), 
                Component: Home
            }, 
            {
                path: '/bookDetails/:bookId', 
                // loader: () => fetch("./booksData.json"), 
                Component: BookDetails
            }
        ]
    }
]);

export default router; 