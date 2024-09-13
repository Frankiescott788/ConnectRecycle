import { Button, Image } from "@nextui-org/react";
import Logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <nav className="fixed top-0 right-0 left-0">
            <div className="flex justify-between mt-5 px-6">
                <div className="logo">
                    <Image src={Logo}
                        height={50}
                    />
                </div>
                <div className="flex gap-5 mt-1">
                    <ul className="hidden lg:flex gap-5 mt-2 ">
                        <li>Home</li>
                        <li>Explore</li>
                        <li>Features</li>
                        <li>About</li>
                    </ul>
                    <div>
                    <Button className="bg-[#fb6f92] text-white mt-1 px-[20pt] hidden lg:px-[30pt] rounded-full shadowed-btn">Sign in</Button>

                        <Button size="sm" className="bg-[#fb6f92] lg:hidden text-white mt-1 px-[20pt] lg:px-[30pt] rounded-full shadowed-btn">Sign in</Button>
                    </div>
                    <button className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#000000"} fill={"none"}>
                            <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}