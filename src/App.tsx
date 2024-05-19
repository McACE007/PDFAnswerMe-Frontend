import { BrowserRouter, Route, Routes } from "react-router-dom"
import ChatPage from "./pages/ChatPage"
import FileProvider from "./providers/FileProvider"
import { ClerkProvider } from "@clerk/clerk-react"
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PrivateRoute from "./components/PrivateRoute";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {

  return (
    <ClerkProvider publishableKey={publishableKey} >
      <BrowserRouter>
        <FileProvider>
          <Routes>
            <Route path="/" element={<PrivateRoute children={<ChatPage />} />} />
            <Route path="/sign-up/*" element={<SignUpPage />} />
            <Route path="/sign-in/*" element={<SignInPage />} />
            <Route path="/chat" element={<PrivateRoute children={<ChatPage />} />} />
            <Route path="/chat/:chatId" element={<PrivateRoute children={<ChatPage />} />} />
            <Route path="*" element={"Error Page"} />
          </Routes>
        </FileProvider >
      </BrowserRouter>
    </ClerkProvider>
  )
}

export default App
