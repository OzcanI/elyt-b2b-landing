"use client"

import { useEffect, useState } from "react";
import { scrollToId } from "../_utils/scrollToId";

export const Subscribe = () => {
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.get('subs')) {
            setSubmitted(true);
            scrollToId('subscribe', true);
        }
    }, [])

    return <div className="w-full py-[5%] relative">
        <div className="w-fit relative mx-auto">
            <img className="mt-[-30%] mb-[-30%] z-[-1] max-w-[2300px] w-[150%] ml-[50%] translate-x-[-50%] md5:w-full hidden md:block" src="bg_contact.webp"/>
            <img className="mt-[-30%] mb-[-30%] z-[-1] max-w-[99999px] w-[150%] ml-[-25%] md5:ml-0 md5:w-full block md:hidden" src="bg_contact_mobile.webp"/>
            <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center">
                <div id="subscribe" className="w-full max-w-container mx-auto">
                    <img src="book.webp" className="w-[55%] md:w-[20%] mx-auto"/>
                    <div className="text-[30px] md:text-[44px] font-[300] w-fit mx-auto text-center">
                        <span className="font-[600]">Bültenimize abone olun</span> ve <br/>
                        <span className="font-[600]">hediye hatıra kartınızı</span> alın
                    </div>
                    {!submitted ? <><div className="border-[#564B8F] border mt-5 w-fit mx-auto rounded-[25px] overflow-hidden">
                        <form onSubmit={(e) => {
                                setTimeout(() => {
                                    setSubmitted(true);
                                }, 500);
                            }} method="POST" action="https://db193fbe.sibforms.com/serve/MUIFAIjoOHvvcm35cfOvxw_j4_RfBidorEahahYorZvoqbH9ck9VnOG3CL3880emW0Jh3j0kbfO_nPsnLN-sovCtLHZBGOIp0VBIKe5_JVzeGQozTiwdKbU2-SsLPSQZMdLVTvJgyAjjXjdLI6DvdP6XArvtZNVjd6rpg4gDPMjpyf9tYB2Ji5qvTdo43WkZcg0Z9WxcalYeRfmH" data-type="subscription">
                            <input type="email" name="EMAIL" id="EMAIL" required={true} className="w-[250px] md:w-[300px] h-[55px] border-none rounded-[5px] px-5" placeholder="E-mail adresiniz"/>
                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Abone Ol" className="h-[55px] px-5 md:px-10 bg-[#A76ACF] text-[20px] font-[600] text-white"/>
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