type Props = {
  imageUrl: string;
  message: string;
}

export default function Chat({ imageUrl, message }: Props) {
  return (
    <div className="flex justify-center items-start space-x-[24px]">
      <img src={imageUrl} alt="Sender's Logo" height={40} width={40} />
      <div className="font-inter font-medium text-[15px]">
        {message}
      </div>
    </div>
  )
}

