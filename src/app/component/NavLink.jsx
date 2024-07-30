import Link from "next/link";
import "../../app/Header.css"

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="menu"
    >
      {title}
    </Link>
  );
};

export default NavLink;