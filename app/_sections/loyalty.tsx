const Subject = ({title, description}: {title: string, description: string}) => {
    return <>
        <div className="text-[32px] font-[600] text-center md5:text-left">
            {title}
        </div>
        <div className="text-[24px] font-[400] mt-[49px] text-center md5:text-left">
            {description}
        </div>
    </>
}

const LoyaltyTitle = ({title, description}: {title: string, description: string}) => {
    return <div className="bg-[#C9DEFF] md5:bg-[#E6E8FA] w-[340px] h-[220px] py-[24px] px-[47px] rounded-[25px] mb-[18px]">
        <div className="text-[24px] font-[600]">
            {title}
        </div>
        <div className="text-[18px] font-[300] mt-2">
            {description}
        </div>
    </div>
}

export const Loyalty = () => {
    return <div className="w-full md5:flex md5:space-x-[30px] py-[80px] space-y-12 md5:space-y-0">
        <div className="w-full">
            <div className="mx-auto md5:ml-auto w-fit">
                <LoyaltyTitle
                    title="Loyalty Sistemim Var"
                    description="Mevcut sisteminize hatıra token ekleme imkanı ELYT’de."
                />
            </div>
            <div className="bg-[#E6E8FA] md5:bg-[#ECF1F9] py-[70px] px-[45px] md5:px-[90px] rounded-t-[36px] md5:rounded-l-none md5:rounded-r-[36px]">
                <Subject 
                    title={`Mevcut Loyalty Sistemlerine nasıl entegre oluyoruz?`}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                />
            </div>
        </div>

        <div className="w-full">
            <div className="mx-auto md5:ml-auto w-fit">
                <LoyaltyTitle
                    title="Loyalty Sistemim Var"
                    description="ELYT Modern Loyalty Çözümü, en yeni teknolojiler ile tüm sadakat senaryolarını kurgulamaya hazır."
                />
            </div>
            <div className="bg-[#E6E8FA] md5:bg-[#ECF1F9] py-[70px] px-[45px] md5:px-[90px] rounded-t-[36px] md5:rounded-r-none md5:rounded-l-[36px]">
                <Subject 
                    title={`Hemen bugün bir loyalty çözümüne mi ihtiyacınız var?`}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                />
            </div>
        </div>
    </div>
};