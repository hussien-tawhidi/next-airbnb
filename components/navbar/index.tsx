import LogoNav from "./LogoNav";
import Search from "./Search";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <div className='py-4 xl:px-5 md:px-3 sm:px-2 px-1 border-b-[1px]'>
      <div className='container'>
        <div className='flex items-center justify-between gap-3 md:gap-0'>
          <LogoNav />
          <Search />
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
