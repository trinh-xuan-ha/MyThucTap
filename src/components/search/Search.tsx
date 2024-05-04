import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
type MyonClose = {
  onClose: () => void;
};
export default function Search({ onClose }: MyonClose) {
  return (
    <nav
      className="z-50 fixed left-0  top-0 w-full h-full right-0 bg-slate-700/30"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white h-72 top-0 w-full px-10 flex flex-col items-center gap-y-3">
        <div className="w-3/5 flex flex-col justify-end gap-y-20 py-9 ">
          <div className="search w-full h-12 relative">
            <input
              type="search"
              placeholder="Enter your keywords"
              className="rounded-3xl border-2 w-full h-full px-4"
            ></input>
            <div className="absolute right-1 top-1/2 h-11  w-11 rounded-full bg-red-500 flex items-center justify-center text-white -translate-y-1/2 cursor-pointer">
              <IoSearchOutline />
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <strong>HOT SEARCHES :</strong>
            <div className="flex gap-x-2">
              <div className="p-2 w-20 flex items-center justify-center bg-slate-100 rounded-lg">
                T-Shirt
              </div>
              <div className="p-2 w-20 flex items-center justify-center bg-slate-100 rounded-lg">
                Men
              </div>
              <div className="p-2 w-20 flex items-center justify-center bg-slate-100 rounded-lg">
                Women
              </div>
              <div className="p-2 w-20 flex items-center justify-center bg-slate-100 rounded-lg">
                Jacket
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
