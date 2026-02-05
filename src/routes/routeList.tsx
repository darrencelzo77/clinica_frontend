// src/routeList.tsx
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import LoginPage from "@/components/reusable/LoginPage";
import SidebarPage from "@/components/reusable/SidebarPage";
import CaseList from "@/pages/Cases/CaseList";
import PatientList from "@/pages/Patient/PatientList";
import Procedure from "@/pages/Procedures/Procedure";
import Dashboard from "@/pages/Dashboard/Dashboard";
// import DashboardQueue from "@/pages/Dashboard/DashboardQueue";
// import PatientAdd from "@/pages/Patient/PatientAdd";
// import DoctorList from "@/pages/Employee/EmployeeList";
import ExternalAccess from "@/pages/ExternalAccess/ExternalAccess";
import Department from "@/pages/Settings/Department";
import Branch from "@/pages/Settings/Branch";
import UserList from "@/pages/Settings/UserList";
import EmployeeList from "@/pages/Employee/EmployeeList";
// import Queueing from "@/pages/Queue/Index";
import  { Queueing1, Queueing2, Queueing3 } from "@/pages/Queue/Index";

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
                    { path: "app", element: <Dashboard /> },   // /app
                    { path: "queue1", element: <Queueing1 /> },   // /app
                    { path: "queue2", element: <Queueing2 /> },   // /app
                    { path: "queue3", element: <Queueing3 /> },   // /app
                    { path: "cases", element: <CaseList /> },  // /cases
                    { path: "patient", element: <PatientList /> },  // /cases
                    { path: "procedure", element: <Procedure /> },  // /cases
                    { path: "employee-list", element: <EmployeeList /> },  // /cases
                    { path: "external-access", element: <ExternalAccess /> },  // /cases
                    { path: "settings/department", element: <Department /> },  // /cases
                    { path: "settings/branch", element: <Branch /> },  // /cases
                    { path: "settings/users-list", element: <UserList /> },  // /cases

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
