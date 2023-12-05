export const Subscribe = () => {
    return <div className="w-full py-[5%] relative">
        <img className="mt-[-30%] mb-[-30%] z-[-1] max-w-[99999px] w-[150%] ml-[-25%] md5:ml-0 md5:w-full hidden md:block" src="bg_contact.webp"/>
        <img className="mt-[-30%] mb-[-30%] z-[-1] max-w-[99999px] w-[150%] ml-[-25%] md5:ml-0 md5:w-full block md:hidden" src="bg_contact_mobile.webp"/>
        <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center">
            <div className="">
                <div className="text-[44px] font-[300]">
                    <span className="font-[600]">Web3 sadakat bülteni</span> ve <br/>
                    <span className="font-[600]">hediye hatıra kartınızı</span> alın
                </div>
                <div className="text-[20px] text-[#828282] font-[300] text-center mt-5">Lütfen <span className="font-[600]">kurumsal</span> mail adresinizi girin!</div>
                <div className="border-[#564B8F] border mt-5 w-fit mx-auto rounded-[25px] overflow-hidden">
                    <input className="w-[300px] h-[50px] border-none rounded-[5px] px-5" placeholder="E-mail adresiniz"/>
                    <button className="h-[55px] px-10 bg-[#A76ACF] text-[20px] font-[600] text-white">Abone ol</button>
                </div>
            </div>
        </div>
    </div>
};