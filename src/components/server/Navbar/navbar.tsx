import Link from "next/link";

type linkNav = {
    link: string,
    name: string
}

const navLinks: linkNav[] = [
    {
        link: '#',
        name: "Home"
    },
    {
        link: '#product',
        name: "Product"
    },
    {
        link: '#contact',
        name: "Contact"
    },
];

const Navbar = () => {

    return (
        <header className="flex items-center px-5 py-2">
            <div className="logo-wrap">
            <h1 className="logo">Sova</h1>
            </div>
            <nav>
                <ul 
                className="flex" 
                style={{ listStyle: "none", gap: "48px", flexDirection: "row", padding: "0" }}>
                    {navLinks.map((navLink, idx) => (
                        <li key={idx}>
                            <Link className="Link" href={navLink.link}>{navLink.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;