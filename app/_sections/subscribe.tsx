"use client"

import { useState } from "react";

export const Subscribe = () => {
    const [submitted, setSubmitted] = useState(false);

    return <div className="w-full py-[5%] relative">
        <div className="w-fit relative mx-auto">
            <img className="mt-[-30%] mb-[-30%] z-[-1] max-w-[2300px] w-[150%] ml-[50%] translate-x-[-50%] md5:w-full hidden md:block" src="bg_contact.webp"/>
            <img className="mt-[-30%] mb-[-30%] z-[-1] max-w-[99999px] w-[150%] ml-[-25%] md5:ml-0 md5:w-full block md:hidden" src="bg_contact_mobile.webp"/>
            <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center">
                <div className="w-full max-w-container mx-auto">
                    <img src="book.png" className="w-[55%] md:w-[20%] mx-auto"/>
                    <div className="text-[44px] font-[300] w-fit mx-auto text-center">
                        <span className="font-[600]">Bültenimize abone olun</span> ve <br/>
                        <span className="font-[600]">hediye hatıra kartınızı</span> alın
                    </div>
                    {!submitted ? <><div className="border-[#564B8F] border mt-5 w-fit mx-auto rounded-[25px] overflow-hidden">
                        <form onSubmit={(e) => {
                                setTimeout(() => {
                                    setSubmitted(true);
                                }, 500);
                            }} action="https://dev.us11.list-manage.com/subscribe/post?u=2d3fa3f20b68ec5e61ba10e98&amp;id=5e90c648b6&amp;f_id=0022b4e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                            <input type="email" name="EMAIL" id="mce-EMAIL" required={true} className="w-[300px] h-[50px] border-none rounded-[5px] px-5" placeholder="E-mail adresiniz"/>
                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Abone Ol" className="h-[55px] px-10 bg-[#A76ACF] text-[20px] font-[600] text-white"/>
                        </form>
                    </div>
                    <div className="text-[20px] text-[#828282] font-[300] text-center mt-5">Lütfen <span className="font-[600]">kurumsal</span> mail adresinizi girin!</div>
                    </>: <div className="mt-5 w-fit mx-auto text-[44px] rounded-[25px] overflow-hidden">
                            Teşekkürler!
                        </div>
                        }
                </div>
            </div>
        </div>
    </div>
};