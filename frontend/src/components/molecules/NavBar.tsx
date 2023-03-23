import NavMenu from '../atoms/NavMenu';
import StoreLogo from '../atoms/StoreLogo';
import SearchBox from '../atoms/SearchBox';
import InsideOfTheCart from '../atoms/InsideOfTheCart';

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 w-screen fixed top-0 left-0 right-0 z-10 px-10 drop-shadow-md">
      <div className="navbar-start justify-start">
        <NavMenu />
        <StoreLogo />
      </div>

      <div className="navbar-end flex">
        <div className="flex-1 gap-2">
          <SearchBox />
        </div>
        <InsideOfTheCart />
      </div>
    </div>
  );
}
