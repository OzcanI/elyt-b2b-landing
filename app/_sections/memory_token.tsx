export const MemoryToken = () => {
    return <div className="w-full py-[5%] px-[5%] md:px-[10%] relative overflow-hidden bg-bgPurple md5:bg-bgGray">
        <div className="w-full grid grid-cols-2 md5:grid-cols-3">
            <div className="col-span-2 pr-12 flex items-center">
                <div>
                    <div className="text-[48px] font-[600] text-white md5:text-[#3F3B3B] w-full h-fit text-center md5:text-left">Hatıra Token Nedir?</div>
                    <div className="text-[24px] font-[400] text-white md5:text-[#3F3B3B] w-full h-fit mt-8 text-center md5:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    </div>
                </div>
            </div>
            <div className="hidden md5:block">
                <img src={'memory_token.png'} className="w-full"/>
            </div>
        </div>
    </div>
};