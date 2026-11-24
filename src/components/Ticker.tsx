const ITEMS = ["10,000 STEPS A DAY", "300,000 STEPS IN 30 DAYS", "SHARE YOUR PROGRESS"];

export default function Ticker({ className = "" }: { className?: string }) {
  // Content is duplicated so the -50% translate loops seamlessly.
  const row = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className={`relative z-40 overflow-hidden py-6 ${className}`}>
      <div className="-mx-8 rotate-[2.3deg] bg-gradient-to-r from-brand-light to-brand py-1.5 text-[#1a0a00] lg:py-2 xl:py-2.5 hd:py-2.5">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {row.map((item, i) => (
                <span
                  key={i}
                  className="flex items-center whitespace-nowrap text-[14px] font-extrabold leading-none tracking-[0.02em] lg:text-[18px] lg:tracking-[0.03em] xl:text-[21px] hd:text-[22px]"
                >
                  <span className="px-4 lg:px-5 xl:px-[26px] hd:px-7">{item}</span>
                  <span className="text-[0.75em]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
