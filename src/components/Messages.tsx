import Message from "./Message";
import QueryInput from "./QueryInput";
import AILogo from "../assets/ai-logo.svg"

export default function Messages() {
  return (
    <div className="size-full overflow-y-auto p-[36px] md:p-[61px] flex justify-between flex-col">
      <div className="flex-1">
        {/* <Message imageUrl={AILogo} message={} /> */}
      </div>
      <QueryInput />
    </div>
  )
}

