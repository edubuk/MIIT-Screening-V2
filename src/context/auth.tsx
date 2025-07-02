import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// 1. Define the shape of your auth state
interface AuthState {
  user: any | null; // Replace 'any' with a specific type if available
  token: string;
}

// 2. Define the type of the context value
type AuthContextType = [AuthState, Dispatch<SetStateAction<AuthState>>];

// 3. Create the context with default undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 4. Define props for the provider
interface AuthProviderProps {
  children: ReactNode;
}

// 5. Provider component
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      
      const parsedData = JSON.parse(data);
      console.log("auth user",parsedData)
      setAuth({
        user: parsedData.user,
        token: parsedData.token,
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// 6. Custom hook to use the AuthContext
const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// 7. Export
export { AuthProvider, useAuth };
