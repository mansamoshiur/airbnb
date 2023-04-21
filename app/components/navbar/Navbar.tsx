'use client';

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
    return ( 
        <div className="fixed z-10 bg-white w-full shadow-md">
            <div className="border-b-[1px] py-4">
                <Container>
                <div className="flex justify-between items-center">
                    <Logo />
                    <Search />
                    <UserMenu />
                </div>
                </Container>
            </div>
        </div>
     );
}
 
export default Navbar;