import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Footsteps from "./Footsteps";
import PhoneMockup from "./PhoneMockup";
import StoreButtons from "./StoreButtons";
import Ticker from "./Ticker";

// Drop the illustrated character (transparent PNG) at this path and it will appear.
const CHARACTER_SRC = "/images/hero-character.png";
const hasCharacter = fs.existsSync(path.join(process.cwd(), "public", CHARACTER_SRC));

/*
 * Desktop (lg+) is laid out on the 1280px-wide content area of the 1440px design,
 * using the design's pixel values, then scaled down with `zoom` on narrower screens.
 * On mobile the copy stacks and the visual block is scaled to fit the width.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden lg:overflow-visible">
      {/* giant faded number behind everything */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-[18px] left-[-0.04em] hidden select-none text-[236px] font-extrabold leading-none tracking-tight text-white/[0.035] lg:block xl:text-[300px] hd:text-[315px]"
      >
        10,000
      </span>

      {/* orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[420px] -z-10 size-[520px] -translate-x-1/2 rounded-full bg-brand-dark/25 blur-[110px] lg:-top-48 lg:left-auto lg:right-[-10%] lg:size-[800px] lg:translate-x-0 lg:bg-brand-dark/20 lg:blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1344px] px-6 pb-6 pt-[30px] sm:px-8 sm:pt-6 lg:h-[630px] lg:w-[1200px] lg:max-w-none lg:px-0 lg:py-0 lg:[zoom:0.75] xl:[zoom:0.95] hd:[zoom:1]">
        {/* copy */}
        <div className="lg:absolute lg:left-0 lg:top-[75px] lg:w-[620px] lg:[zoom:0.75]">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FE9A00]/40 bg-[#200E07] px-3 py-1 text-[9.5px] font-bold sm:text-[10px] tracking-[0.1em] text-[#FE9A00] lg:h-[33px] lg:gap-[9px] lg:px-[15px] lg:py-0 lg:text-[13.5px] lg:tracking-[0.1em]">
            <span className="size-1.5 rounded-full bg-[#FE9A00] lg:size-[7px]" />
            30-DAY STEPS CHALLENGE
          </span>
          <h1 className="mt-4 text-[35px] sm:mt-5 sm:text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:mt-6 lg:text-[76px] lg:leading-[1.13] lg:tracking-[-0.03em]">
            Join the Fitness Space{" "}
            <span className="bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
              10K Steps
            </span>{" "}
            Challenge
          </h1>
          <p className="mt-4 max-w-md text-[13px] leading-[22px] tracking-[-0.01em] text-white/75 sm:tracking-normal sm:text-base lg:mt-4 lg:max-w-[520px] lg:text-[20px] lg:leading-[32px]">
            Walk 10,000 steps daily, track your progress and share your achievements with friends.
          </p>
          <StoreButtons large compact className="mt-3.5 !flex-nowrap !gap-2 sm:mt-6 sm:!gap-3 lg:mt-[42px] lg:!gap-4" />
        </div>

        {/* visual: fixed 670×730 design box */}
        <div className="relative left-1/2 mt-[200px] h-[730px] w-[670px] -translate-x-1/2 [zoom:0.53] sm:mt-8 sm:[zoom:0.85] md:[zoom:1] lg:absolute lg:left-auto lg:right-0 lg:top-[25px] lg:mt-0 lg:translate-x-0 lg:[zoom:0.75]">
          <div className="absolute left-[128px] top-[17px] size-[554px] rounded-full bg-gradient-to-br from-brand-light to-brand-dark shadow-[0_0_120px_rgba(245,73,0,0.3)]" />

          <PhoneMockup className="absolute left-[359px] top-[-23px] rotate-[7deg] scale-[0.875] lg:left-[421px] lg:top-[-14px]" />

          {hasCharacter && (
            <Image
              src={CHARACTER_SRC}
              alt="Fitness Space athlete"
              width={1880}
              height={2720}
              sizes="470px"
              priority
              className="absolute left-[127px] top-[3px] z-10 h-[680px] w-[470px] lg:left-[150px] lg:top-[50px]"
            />
          )}

          <PhoneMockup className="absolute left-[59px] top-[154px] z-20 -rotate-[7.3deg] lg:left-[40px] lg:top-[230px]" />

          <div className="absolute left-[482px] top-[538px] z-30 hidden md:flex h-[60px] w-[187px] items-center gap-3 rounded-full border border-white/10 bg-[#141414]/90 pl-[9px] backdrop-blur">
            <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand-light to-brand-dark">
              <Footsteps className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[17px] font-semibold">10,482 steps</span>
              <span className="block text-[13px] text-muted">Daily goal reached</span>
            </span>
          </div>
        </div>
      </div>

      <Ticker className="-mt-16 lg:-mt-24" />
    </section>
  );
}
