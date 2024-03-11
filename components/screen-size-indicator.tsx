export default function ScreenSizeIndicator() {
  return (
    <div className="fixed z-50 top-0 left-0 p-4 text-xl font-bold">
      <h1 className="xs:block sm:hidden">
        XS <span className="font-light opacity-50 text-xs">0px - 639px</span>
      </h1>
      <h1 className="hidden sm:block md:hidden">
        SM <span className="font-light opacity-50 text-xs">640px - 767px</span>
      </h1>
      <h1 className="hidden md:block lg:hidden">
        MD <span className="font-light opacity-50 text-xs">768px - 1023px</span>
      </h1>
      <h1 className="hidden lg:block xl:hidden">
        LG{' '}
        <span className="font-light opacity-50 text-xs">1024px - 1279px</span>
      </h1>
      <h1 className="hidden xl:block 2xl:hidden">
        XL
        <span className="font-light opacity-50 text-xs">1280px - 1535px</span>
      </h1>
      <h1 className="hidden 2xl:block">
        2XL
        <span className="font-light opacity-50 text-xs">1280px - 1535px</span>
      </h1>
    </div>
  )
}

// lg	@media screen and (min-width: 1024px)	≥1024px
// xl	@media screen and (min-width: 1280px)	≥1280px
// 2xl	@media screen and (min-width: 1536px)	≥1536px
// PureCSS has seven default breakpoints:

// Path: components/screen-size-indicator.tsx
// Created at: 16:19:55 - 11/03/2024
// Language: Typescript
// Framework: React/Next.js
