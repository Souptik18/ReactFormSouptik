import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FeedbackTable from "./FeedbackTable.jsx";
import SubmitMessage from "./SubmitMessage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/feedback",
    element: <FeedbackTable />,
  },
  {
    path: "/submitted",
    element: <SubmitMessage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // {/* </React.StrictMode> */}
);
