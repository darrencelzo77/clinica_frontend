// src/App.tsx
import { useRoutes } from "react-router-dom";
import routes from "./routes/routeList";

export default function App() {
  return useRoutes(routes);
}
