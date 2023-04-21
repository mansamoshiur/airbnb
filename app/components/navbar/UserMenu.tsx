'use client';
import { useCallback, useState } from 'react';
import {TbWorld} from 'react-icons/tb'
import {AiOutlineMenu} from 'react-icons/ai'
import MenuItem from './MenuItem';
import Avatar from '../Avatar';
import useRegisterModal from '@/app/hook/useRegisterModal';
const UserMenu = () => {
    const registerModal = useRegisterModal();
    const [isOpen,setIsOpen]=useState(false)
    const toggleOpen = useCallback(()=>{
        setIsOpen((value)=>!value);
    },[])
    return ( 
        <div className="hidden md:block">
        <div className="flex flex-row items-center">
                <div className="text-sm hover:bg-neutral-100 rounded-full transition cursor-pointer p-2">
                        Airbnb your home
                </div>
                <div className="hover:bg-neutral-100 rounded-full transition cursor-pointer p-2">
                    <TbWorld size={14} />
                </div>
                <div onClick={toggleOpen} className="flex flex-row items-center gap-3 rounded-full py-1 px-2  bg-neutral-100 shadow-sm hover:shadow-md transition cursor-pointer">
                        <AiOutlineMenu size="14" />
                        <div  className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounde-lg shadow-md w-[20vw] md:w-0.3/4 bg-white overflow-hidden right-10 top-18 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <>
                        <MenuItem onClick={()=>{}} label='Sign In'  />
                        <MenuItem onClick={registerModal.onOpen} label='Sign up'  />
                        </>
                    </div>
                </div>
            )}
        </div>

     );
}
 
export default UserMenu;