import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
      <div className="no-scrollbar min-h-screen bg-[#00170f] overflow-x-hidden">
        {/*  1. HEADER SECTION (Full Width)  */}
        <div className="overflow-hidden bg-[#00170f]">
          <header id="hero-container" className="bg-[url('/background.jpg')] bg-cover bg-center min-h-[70vh] flex items-center justify-center p-8 relative">
            <div id="hero-content" className="drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] relative flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-[clamp(48px,10vw,120px)] font-serif font-extralight tracking-[0.2em] uppercase leading-tight">
                Gil Granado
              </h1>
              <p className="tracking-[0.8em] uppercase text-[clamp(8px,1vw,10px)] opacity-80 font-light mt-4">
                Haute Couture • BF Resort Village Las Piñas City • Manila
              </p>
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

        {/*  2. MAKING SHI SEAMLESS WRAPPER (Sidebar + All Content)  */}
        <div className="flex flex-col md:flex-row min-h-screen">

          {/* CONSISTENT SIDE NAV */}
          <aside className="w-full md:w-[10%] bg-[#00170f] flex flex-row md:flex-col items-center justify-center md:justify-start py-6 md:py-12 md:h-screen border-b md:border-b-0 md:border-r border-white/5 z-50">
            <div className="fixed top-6 left-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white text-[12px] font-serif uppercase tracking-widest">
              GG
            </div>
          </aside>

          {/* CONTINUOUS MAIN CONTENT */}
          <div className="flex-1 flex flex-col bg-[#ddead1]">

            {/* --- CONSISTENT TOP BORDER (Grid Start) --- */}
            <div
                className="w-full h-[clamp(100px,15vw,250px)] z-20 pointer-events-none"
                style={{ backgroundImage: "url('/border.png')", backgroundRepeat: 'repeat-x', backgroundSize: 'auto 100%' }}
            ></div>

            {/* --- CATEGORY GRID --- */}
            <section className="px-4 md:px-20 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {[
                  { title: "Weddings", src: "/wedgo.jpg" },
                  { title: "Gowns", src: "/pirp.jpg" },
                  { title: "Suits", src: "/suit.jpg" },
                  { title: "Cultural", src: "/cultural.jpg" },
                ].map((cat, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="relative aspect-[3/4] w-full overflow-hidden border-[8px] md:border-[12px] border-[#00170f]">
                        <Image src={cat.src} fill alt={cat.title} className="object-cover hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="bg-[#00170f] text-white py-4 text-center font-serif uppercase tracking-[0.3em] text-sm">
                        {cat.title}
                      </div>
                    </div>
                ))}
              </div>
            </section>

            {/*  SEAMLESS TRANSITION BORDER (Between Grid & Editorial)  */}
            <div
                className="w-full h-[clamp(100px,15vw,250px)] z-20 pointer-events-none"
                style={{ backgroundImage: "url('/border.png')", backgroundRepeat: 'repeat-x', backgroundSize: 'auto 100%' }}
            ></div>

            {/*  EDITORIAL SECTION  */}
            <main className="flex-1 flex flex-col relative overflow-hidden">
              <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-24 py-20 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                  <div className="flex flex-col text-center lg:text-left">
                    <h2 className="text-[#00170f] font-serif tracking-tight leading-tight uppercase mb-6">
                      <span className="text-base md:text-xl block mb-2 font-light">UNLEASH THE</span>
                      <span className="italic font-light opacity-60 text-[clamp(40px,8vw,80px)] block leading-none">CONFIDENCE</span>
                    </h2>
                    <h2 className="text-[#00170f] font-serif tracking-tight leading-tight uppercase mb-8">
                      <span className="text-base md:text-xl block mb-2 font-light">WEAR IT WITH</span>
                      <span className="italic font-light opacity-60 text-[clamp(40px,8vw,80px)] block leading-none">ELEGANCE</span>
                    </h2>
                    <p className="text-[#00170f] font-light leading-relaxed text-base md:text-lg mb-10 max-w-md mx-auto lg:mx-0">
                      A masterpiece of Arabian-inspired luxury, this gown flows like liquid fire in a deep, commanding red.
                      Adorned with shimmering crystals and intricate gold embroidery.
                    </p>
                    <div><Button className="bg-[#00170f] text-white px-12 py-6 rounded-none uppercase tracking-[0.3em] text-xs hover:bg-gray-700 transition-all w-full md:w-auto">View More</Button></div>
                  </div>
                  <div className="flex justify-center relative mt-8 lg:mt-0">
                    <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full bg-[#00170f] -z-10"></div>
                    <Image src="/purpy.jpg" width={600} height={700} alt="view-more-pictures" className="shadow-2xl rounded-none w-full max-w-[500px] h-auto aspect-[4/5] object-cover transition-opacity duration-500 hover:opacity-90" />
                  </div>
                </div>
              </div>

              {/*  FINAL BOTTOM BORDER  */}
              <div className="w-full h-[clamp(100px,15vw,250px)] z-30 pointer-events-none" style={{ backgroundImage: "url('/border.png')", backgroundRepeat: 'repeat-x', backgroundSize: 'auto 100%' }}></div>
            </main>
          </div>
        </div>
      </div>
  );
}