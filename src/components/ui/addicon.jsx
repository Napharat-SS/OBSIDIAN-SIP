import { HiPlus } from "react-icons/hi"; // heroicons ผ่าน react-icons

export default function AddIconButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600"
      aria-label="Add to basket"
    >
      <HiPlus size={18} />
    </button>
  );
}
