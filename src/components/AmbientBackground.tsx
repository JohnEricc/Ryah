export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-[-12rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/18 blur-3xl" />
      <div className="absolute right-[-8rem] top-[18%] h-[24rem] w-[24rem] rounded-full bg-amber-300/12 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-[18%] h-[26rem] w-[26rem] rounded-full bg-rose-300/12 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,244,230,0.16),_transparent_34%),linear-gradient(180deg,rgba(17,8,23,0.86),rgba(31,11,30,0.96))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.08]" />
    </div>
  )
}
