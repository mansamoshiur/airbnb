'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = ()=>{
    const route = useRouter
    return(
        <div>
            <Image src="/images/logo.png" alt="logo" height='100' width='100' className="hidden md:block cursor-pointer" />
        </div>
    )
}

export default Logo;