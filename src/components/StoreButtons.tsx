const APP_STORE_URL = "#";
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.fitnessspace.app";

function StoreButton({
  href,
  icon,
  small,
  label,
  large,
  compact,
}: {
  href: string;
  icon: React.ReactNode;
  small: string;
  label: string;
  large: boolean;
  compact: boolean;
}) {
  return (
    <a
      href={href}
      {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
      className={`flex items-center whitespace-nowrap border bg-black transition hover:border-white/40 ${
        large
          ? `${compact ? "h-12 gap-2.5 px-3" : "h-14 gap-3.5 px-5 [&_svg]:h-6 [&_svg]:w-5 sm:[&_svg]:h-5 sm:[&_svg]:w-[18px]"} rounded-[10px] border-white/25 sm:h-[52px] sm:gap-3 sm:rounded-xl sm:px-4 lg:h-[60px] lg:gap-3.5 lg:rounded-[14px] lg:px-[22px] lg:[&_svg]:h-[26px] lg:[&_svg]:w-[23px]`
          : "gap-2.5 rounded-lg border-white/15 px-4 py-2"
      }`}
    >
      {icon}
      <span className="flex flex-col leading-tight">
        <span className={large ? `${compact ? "text-[10px]" : "text-[11.5px]"} text-white/85 sm:text-[11px] lg:text-[13px]` : "text-[9px] text-white/70"}>{small}</span>
        <span className={large ? `${compact ? "text-[16px]" : "text-[19px]"} font-semibold sm:text-[17px] lg:text-[20px]` : "text-sm font-semibold"}>{label}</span>
      </span>
    </a>
  );
}

export default function StoreButtons({
  className = "",
  large = false,
  compact = false,
}: {
  className?: string;
  large?: boolean;
  /** Smaller buttons on mobile (hero). */
  compact?: boolean;
}) {
  return (
    <div className={`flex flex-wrap ${large ? "gap-3 lg:gap-4" : "gap-3"} ${className}`}>
      <StoreButton
        large={large}
        compact={compact}
        href={APP_STORE_URL}
        small="Download on the"
        label="App Store"
        icon={
          <svg width="18" height="20" viewBox="0 0 384 512" fill="currentColor" aria-hidden>
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
        }
      />
      <StoreButton
        large={large}
        compact={compact}
        href={GOOGLE_PLAY_URL}
        small="GET IT ON"
        label="Google Play"
        icon={
          <svg width="18" height="20" viewBox="0 0 24 26" aria-hidden>
            <path d="M1 1l12.5 12L1 25c-.6-.3-1-.9-1-1.7V2.7C0 1.9.4 1.3 1 1z" fill="#00d7fe" />
            <path d="M17.6 9L13.5 13 1 1c.2-.1.5-.2.8-.2.4 0 .7.1 1 .3L17.6 9z" fill="#00f076" />
            <path d="M17.6 17L2.8 24.9c-.3.2-.6.3-1 .3-.3 0-.6-.1-.8-.2L13.5 13l4.1 4z" fill="#ff3a44" />
            <path d="M22.8 14.6l-5.2 2.4-4.1-4 4.1-4 5.2 2.4c1.4.8 1.4 2.4 0 3.2z" fill="#ffd400" />
          </svg>
        }
      />
    </div>
  );
}
