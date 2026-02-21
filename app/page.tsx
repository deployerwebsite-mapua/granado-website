import Image from "next/image";
import {Button} from "@/components/ui/button";


export default function Home() {
  return (
    <div>
      <div>
        <header id="hero-container">
          <div id="hero-content" className="relative top-32 inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="relative z-20 text-3xl font-serif tracking-widest uppercase">Gil Granado</h1>
            <p className="mt-4 tracking-[0.4em] uppercase text-xs opacity-90">Haute Couture</p>
          </div>
          <Image
              src="/background.jpg"
              alt="Background"
              width={800}
              height={200}
              priority
              className="absolute top-0 left-0 z-10"
          />
        <div className="relative flex flex-row z-15">
          <Button>
            Log-in
          </Button>
          <Button>
            Sign-up
          </Button>
        </div>
        </header>
      </div>
      <div className="flex flex-row bg-[#00170f] border-2 ">
        <div className="flex flex-column">
          <div className="text-[#E5DED0]">WORKS AND DESIGN</div>
          <div className="text-[#E5DED0]">A masterpiece of Arabian-inspired luxury, this gown flows like liquid fire in a deep, commanding red.
            Adorned with shimmering crystals and intricate gold embroidery, it captures the regal mystery of a desert midnight.
            It is a silhouette of pure power and dazzling elegance, designed for an unforgettable entrance.</div>
          <Button>
            View More
          </Button>
        </div>
      </div>
    </div>
  );
}
