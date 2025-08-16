// src/routeList.tsx
import { Navigate } from "react-router-dom";
import LoginPage from "@/components/reusable/LoginPage";
import SidebarPage from "@/components/reusable/SidebarPage";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    // default entry = /login
    { path: "/login", element: <LoginPage /> },

    // if someone goes to /, send them to /login
    { path: "/", element: <Navigate to="/login" replace /> },

    // your main app can still live at a separate route (e.g. /app)
    { path: "/app", element: <SidebarPage /> },

    // fallback
    { path: "*", element: <div>Not Found</div> },
];

export default routes;
