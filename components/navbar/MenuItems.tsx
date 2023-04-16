"use client"
type MenuItemsProps = {
  onClick: () => void;
  label: string;
};

export default function MenuItems({ onClick, label }: MenuItemsProps) {
  return (
    <div
      className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
      onClick={onClick}>
      {label}
    </div>
  );
}
