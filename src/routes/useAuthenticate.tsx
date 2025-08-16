// import { useAppSelector } from "@/redux/store";
// import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// interface AuthContextType {
//   isAuthenticated: boolean; 
//   setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const accessToken = useAppSelector((e) => e.login.accessToken)
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!accessToken);

//   useEffect(() => { 
//     if(accessToken) {
//       setIsAuthenticated(true)
//     }else {
//       setIsAuthenticated(false)
//     }
//   }, [accessToken])

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within an AuthProvider");
//   return context;
// };
