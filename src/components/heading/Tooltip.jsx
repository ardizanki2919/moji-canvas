import { InfoButton } from '../reusable';

export default function Tooltip() {
  return (
    <div
      tabIndex={0}
      role="tooltip"
      aria-label="Tooltip with attributions to emoji library and website creator"
      style={{
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
      }}
      className="invisible absolute left-2/4 top-14 z-50 flex w-max -translate-x-2/4 items-center gap-1 rounded-md border border-gray-300/50 bg-white/55 p-2 text-[11px] text-gray-600 opacity-0 shadow-md transition-all duration-300 group-hover:visible group-hover:opacity-100 sm:top-16 sm:gap-2 sm:text-sm"
    >
      <InfoButton />
      <div className="flex flex-col">
        <span>
          Emoji stickers are designed by{' '}
          <a
            href="https://openmoji.org/"
            target="_blank"
            className="font-semibold text-gray-700 underline hover:text-black"
          >
            OpenMoji
          </a>
          .
        </span>
        <span>
          App designed and coded by{' '}
          <a
            href="https://aniqa.dev"
            target="_blank"
            className="font-semibold text-gray-700 underline hover:text-black"
          >
            Aniqa
          </a>
          .
        </span>
      </div>
    </div>
  );
}
