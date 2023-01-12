
export function Loader() {

  return (
    <div
      className="fixed inset-0 w-full h-full bg-[#0a2833] z-[999] grid place-items-center"
    >
      <div className="flex gap-4">
        <div className="w-[2vw] h-[2vw] animate-bounce bg-white/60 rounded-full">
        </div>
        <div className="w-[2vw] h-[2vw] animate-bounce-120 bg-white/60 rounded-full">
        </div>
        <div className="w-[2vw] h-[2vw] animate-bounce-200 bg-white/60 rounded-full">
        </div>
      </div>
    </div>
 )
}
