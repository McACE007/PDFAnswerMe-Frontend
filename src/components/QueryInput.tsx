import { LoaderCircle, SendHorizonalIcon } from "lucide-react";
import { useState } from "react";
import { useFile } from "../hooks/useFile";
import { cn } from "../utils/utils";
import { toast } from "sonner";

export default function QueryInput() {
  const { file } = useFile();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSendMessage() {
    if (!message) {
      toast.warning("Message can not be empty")
      return;
    }

    setIsLoading(prev => !prev);
    await new Promise((res) => {
      setTimeout(res, 2000);
    })
    setIsLoading(prev => !prev);
    setMessage("")

  }

  return (
    <div className={cn(`sticky bottom-0 w-full h-[48px] md:h-[56px] flex justify-center items-center bg-white px-[20px] py-[25px] rounded-lg shadow-md space-x-1`, {
      "bg-white ": file,
      "bg-muted": !file,
    })}>
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Send a message..." className="focus:outline-none w-full h-fit" disabled={!file} />
      <button disabled={!file} type="button" className={cn(`p-2 rounded-full flex items-center justify-center `, {
        "hover:bg-aigreen hover:text-white": file,
        "text-gray-400": !file,
      })} onClick={handleSendMessage}>
        {!isLoading
          ? <SendHorizonalIcon size={22} />
          : <LoaderCircle size={22} className="animate-spin" />
        }
      </button>
    </div>
  )
}

