import Link from "next/link";
function NavLink({ link, title }) {
  return (
    <Link
      href={link}
      className="block pl-3 py-2 pr-4 text-primary-400 sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}

export default NavLink;
