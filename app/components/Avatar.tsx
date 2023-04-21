'use client';

import Image from "next/image";

const Avatar = ()=>{
    return(
        <div >
            <Image className="rounded-full" src='/images/placeholder.jpg' alt="Avatar" width="28" height="28" />
        </div>
    )
}
export default Avatar;