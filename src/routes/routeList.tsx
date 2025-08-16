// src/routeList.tsx
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import LoginPage from "@/components/reusable/LoginPage";
import SidebarPage from "@/components/reusable/SidebarPage";
import CaseList from "@/pages/Cases/CaseList";
import PatientList from "@/pages/Patient/PatientList";
import Procedure from "@/pages/Procedures/Procedure";

// pages (import what you actually have)
// import Patients from "@/components/app/Patients";
// import Doctors from "@/components/app/Doctors";
// import DeptSettings from "@/components/app/settings/Department";
// import BranchSettings from "@/components/app/settings/Branch";
// import PackageSettings from "@/components/app/settings/Package";
// import ProceduresSettings from "@/components/app/settings/Procedures";
// import UsersSettings from "@/components/app/settings/Users";

const routes: RouteObject[] = [
    // auth route (outside sidebar)
    { path: "/login", element: <LoginPage /> },

    // root wrapper so we can have an index redirect + the sidebar layout
    {
        path: "/",
        children: [
            // visiting exactly "/" -> send to /login
            { index: true, element: <Navigate to="/login" replace /> },

            // sidebar layout and its children
            {
                path: "",
                element: <SidebarPage />,
                children: [
                    { path: "app", element: <div>Not Found</div> },   // /app
                    { path: "cases", element: <CaseList /> },  // /cases
                    { path: "patient", element: <PatientList /> },  // /cases
                    { path: "procedure", element: <Procedure /> },  // /cases

                    // add the rest when ready:
                    // { path: "patients", element: <Patients /> },        // /patients
                    // { path: "doctors", element: <Doctors /> },          // /doctors

                    // settings
                    // { path: "settings/department", element: <DeptSettings /> },
                    // { path: "settings/branch", element: <BranchSettings /> },
                    // { path: "settings/package", element: <PackageSettings /> },
                    // { path: "settings/procedures", element: <ProceduresSettings /> },
                    // { path: "settings/users", element: <UsersSettings /> },
                ],
            },
        ],
    },

    // fallback
    { path: "*", element: <div>Not Found</div> },
];

export default routes;
