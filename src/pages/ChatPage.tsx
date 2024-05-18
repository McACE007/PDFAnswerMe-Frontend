import Chats from "../components/Messages";
import NavBar from "../components/NavBar";

export default function ChatPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <NavBar />
      <Chats />
    </div>
  )
}

