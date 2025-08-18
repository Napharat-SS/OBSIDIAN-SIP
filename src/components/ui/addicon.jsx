import { HiPlus } from "react-icons/hi"; // heroicons ผ่าน react-icons

export default function AddIconButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full bg-gray-400 text-white hover:bg-gray-500"
      aria-label="Add to basket"
    >
      <HiPlus size={18} />
    </button>
  );
}
