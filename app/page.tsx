import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <header id="hero-container" className="bg-[url('/background.jpg')] bg-cover p-65">
          <div id="hero-content" className="drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] relative top-32 flex flex-col items-center justify-center text-white">
            <h1 className="absolute text-6xl border-2 contents font-serif tracking-widest uppercase">Gil Granado</h1>
            <p className="mt-4 tracking-[0.4em] uppercase text-xs opacity-90">Haute Couture</p>
          </div>

        <div className="flex flex-row">

          <div className="absolute flex w-fit flex-row top-5 right-5 gap-x-5">
            <Button>
              Log-in
            </Button>
            <Button>
              Sign-up
            </Button>
          </div>
        </div>

        </header>
      </div>
      <div className="flex flex-row bg-[#00170f]">
        <div className="flex flex-column">
          <div className="text-[#E5DED0]">WORKS AND DESIGN</div>
          <div className="text-[#E5DED0]">A masterpiece of Arabian-inspired luxury, this gown flows like liquid fire in a deep, commanding red.
            Adorned with shimmering crystals and intricate gold embroidery, it captures the regal mystery of a desert midnight.
            It is a silhouette of pure power and dazzling elegance, designed for an unforgettable entrance.</div>
          <Button>
            View More
          </Button>
        </div>
        <div id="testLang">
          <Link href="/appointment-page">
            <Button>
              BOOK NOW
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
