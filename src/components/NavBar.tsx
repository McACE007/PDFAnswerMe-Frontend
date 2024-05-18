import AIPlanetLogo from "../assets/ai-planet-logo.svg"
import UploadButton from "./UploadButton"

export default function NavBar() {
  return (
    <div className="sticky top-0 left-0 flex px-5 py-4 justify-between items-center shadow-md focus:border-[1.5px] h-[71px] md:h-[77px] min-w-full space-x-[10px]">
      <img src={AIPlanetLogo} alt="AI Planet Logo" width="104.94px" height="41px" />
      <UploadButton />
    </div>
  )
}

