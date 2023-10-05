import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between bg-red-500 px-2 py-1">
      <div className="">
        <div className="font-semibold text-white text-3xl hidden lg:block">
          Vera V2
        </div>
      </div>
      <Link href="/blog">Blog</Link>
    </header>
  );
}

export default Header;
