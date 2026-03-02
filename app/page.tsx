import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="no-scrollbar">
      <div className="overflow-hidden bg-[#00170f]">
        <header id="hero-container" className="bg-[url('/background.jpg')] bg-cover p-85">
          <div id="hero-content" className="drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]relative bottom-15 flex flex-col items-center justify-center text-white">
            <h1 className="absolute text-[100px] border-2 contents font-serif tracking-widest uppercase">Gil Granado</h1>
            <p className="tracking-[0.4em] uppercase text-xs opacity-90">Haute Couture</p>
          </div>
          <div className="absolute flex w-fit flex-row top-5 right-5 gap-x-5">
            <Link href="/login-page">
              <Button className="pb-6 pt-5 hover:bg-gray-700 transition-colors">
                <p className="text-xl font-serif">Log-in</p>
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="pb-6 pt-5 bg-white text-black hover:bg-gray-200 transition-colors">
                <p className="text-xl font-serif">Sign-up</p>
              </Button>
            </Link>
          </div>
        </header>
      </div>
      <div id="formal-attire-section" className="flex flex-row">
        <div id="formal-attire-one">
          <Image src="/placeholder.png" width="600" height="400" alt="formal-attire-one"></Image>
        </div>
        <div id="formal-attire-two">
          <Image src="/placeholder.png" width="600" height="400" alt="formal-attire-one"></Image>
        </div>
        <div id="formal-attire-three">
          <Image src="/placeholder.png" width="600" height="400" alt="formal-attire-one"></Image>
        </div>
      </div>
      <div className="bg-[#ddead1] pt-5 grid grid-cols-2 gap-x-5">
        <div id="view-more-cta-section" className="flex flex-col">
          <div id="view-more-cta-section-header-one" className="text-black border-2 border-black">
            UNLEASH THE <span>CONFIDENCE</span>
          </div>
          <div id="view-more-cta-section-header-two" className="text-black border-2 border-black">
            WEAR IT WITH <span>ELEGANCE</span>
          </div>
          <div id="view-more-cta-section-body" className="text-black border-2 border-black">A masterpiece of Arabian-inspired luxury, this gown flows like liquid fire in a deep, commanding red.
            Adorned with shimmering crystals and intricate gold embroidery, it captures the regal mystery of a desert midnight.
            It is a silhouette of pure power and dazzling elegance, designed for an unforgettable entrance.
          </div>
          <div>
            <Button>
              View More
            </Button>
          </div>
        </div>
        <div id="view-more-cta-pictures">
          <Image src="/placeholder.png" width="600" height="400" alt="view-more-pictures"></Image>
        </div>
      </div>
    </div>
  );
}
