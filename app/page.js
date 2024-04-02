import GetChannelIdInput from "@/components/getChannelIdInput";
import LiveCharacterPreview from "@/components/liveCharacterPreview";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden bg-[#121212] text-white">
        <div className="relative flex flex-col items-center flex-1">
          <div className="container mx-auto mt-16">
            <div className="mx-auto text-lg font-light md:text-xl w-fit">
              <p>MNGCC</p>
              <p className="font-bold tracking-tighter text-7xl sm:text-8xl md:text-9xl">
                Character
              </p>
              <p className="text-end">Live Chat</p>
            </div>

            <div className="mx-2 md:mx-8 my-14 md:my-16">
              <GetChannelIdInput />
            </div>
            <div className="mx-2 text-xs font-light md:mx-8 sm:text-sm md:text-base">
             
            </div>
            <LiveCharacterPreview />
          </div>
        </div>
        <footer className="flex justify-center w-full p-6 text-xs text-center bg-black/50">
          <p className="font-light">
            Powered by{" "}
            <Link href={"https://github.com/mngcc/"} className="font-medium">
              MNGCC
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
