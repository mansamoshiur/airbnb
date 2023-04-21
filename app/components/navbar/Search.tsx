'use client';
import {BiSearch} from 'react-icons/bi'
const Search = () => {
    return ( 
        <div className="border-[1px] shadow-sm hover:shadow-md transition rounded-full cursor-pointer py-2 w-full md:w-auto">
            <div className="flex flex-col  md:flex-row items-center">
                <div className="px-6 text-sm font-semibold">Anywhere</div>
                <div className="hidden sm:block px-6 border-x-[1px] border-neutral-300">
                    Any week
                </div>
                <div className="flex flex-row items-center ">
                    <div className="pl-6 pr-2 text-sm  text-gray-500">
                        Add guests
                    </div>
                    <div className='p-2 mr-1 bg-rose-600 text-white rounded-full'><BiSearch size={14} /></div>
                </div>
            </div>
        </div>
     );
}
 
export default Search;