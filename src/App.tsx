import ChatPage from "./pages/ChatPage"
import FileProvider from "./providers/FileProvider"

function App() {
  return (
    <FileProvider>
      <ChatPage />
    </FileProvider>
  )
}

export default App
