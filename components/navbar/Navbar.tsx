import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";
import { CustomLink } from "./CustomLink";

const navItems = [
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/pricing",
    text: "Pricing",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center bg-cyan-800 bg-opacity-30 p-2 m-2 rounded justify-between">
      <Link href="/" className="flex items-center gap-1">
        <MdOutlineHome />
        <span>Home</span>
      </Link>
      <div className="flex items-center gap-3">
        {navItems.map((item) => (
          <CustomLink key={item.text} item={item} />
        ))}
      </div>
    </nav>
  );
};
