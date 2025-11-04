import Link from "next/link";

const Navbar = () => {
    return (
        <div className="mt-2">
            <h2>Navbar</h2>
            <div
                className="border
         flex flex-row items-center justify-between gap-5 p-2 overflow-hidden "
            >
                <div className="logo">
                    <Link href="/">BuilderX</Link>
                </div>
                <div>
                    <ul className="flex flex-row items-center justify-center gap-5">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-md ">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
