import Logo from "./Logo";
import { GOOGLE_PLAY_URL } from "./StoreButtons";

export default function Header() {
  return (
    <header className="relative z-20 mx-auto flex max-w-[1344px] items-center justify-between px-6 py-3 sm:px-8 sm:py-5 lg:w-[900px] lg:max-w-none lg:px-0 lg:py-[22px] xl:w-[1140px] hd:w-[1200px]">
      <Logo className="h-3 sm:h-4 lg:h-5" />
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-7 items-center gap-2 rounded-full border border-white px-3 text-[12px] sm:h-9 sm:px-4 sm:text-sm font-medium transition hover:border-brand lg:h-[39px] lg:px-[18px] lg:text-[15px]"
      >
        Get the app
        <svg viewBox="0 0 16 16" className="size-3.5 text-[#FE9A00] sm:size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
        </svg>
      </a>
    </header>
  );
}
