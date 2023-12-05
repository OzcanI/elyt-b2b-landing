const icons = {
    artwork: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18.78 2.25H17.28C16.035 2.25 15.03 3.255 15.03 4.5V6C15.03 7.245 16.035 8.25 17.28 8.25H18.78C20.025 8.25 21.03 7.245 21.03 6V4.5C21.03 3.255 20.025 2.25 18.78 2.25Z" fill="#3A2969"/>
    <path d="M6.40503 16.005H4.90503C3.66003 16.005 2.65503 17.01 2.65503 18.255V19.755C2.65503 21 3.66003 22.005 4.90503 22.005H6.40503C7.65003 22.005 8.65503 21 8.65503 19.755V18.255C8.65503 17.01 7.63503 16.005 6.40503 16.005Z" fill="#3A2969"/>
    <path d="M31.095 16.005H29.595C28.35 16.005 27.345 17.01 27.345 18.255V19.755C27.345 21 28.35 22.005 29.595 22.005H31.095C32.34 22.005 33.345 21 33.345 19.755V18.255C33.345 17.01 32.34 16.005 31.095 16.005Z" fill="#3A2969"/>
    <path d="M5.625 17.88C5.01 17.88 4.5 17.37 4.5 16.755C4.5 10.35 9.3 4.965 15.66 4.215C16.26 4.155 16.83 4.58996 16.905 5.20496C16.98 5.81996 16.53 6.37499 15.915 6.44999C10.695 7.06499 6.75 11.49 6.75 16.755C6.75 17.37 6.24 17.88 5.625 17.88Z" fill="#3A2969"/>
    <path d="M30.375 17.8799C29.76 17.8799 29.25 17.3699 29.25 16.7549C29.25 11.5199 25.335 7.09495 20.145 6.46495C19.53 6.38995 19.095 5.83493 19.17 5.21993C19.245 4.60493 19.815 4.16998 20.43 4.24498C26.745 5.00998 31.515 10.3949 31.515 16.7699C31.5 17.3699 31.005 17.8799 30.375 17.8799Z" fill="#3A2969"/>
    <path d="M19.935 33.0151H16.08C14.7 33.0151 13.68 31.905 13.935 30.705L14.5651 27.9301H21.45L22.08 30.705C22.365 31.98 21.405 33.0151 19.935 33.0151Z" fill="#3A2969"/>
    <path opacity="0.4" d="M24.105 25.575L21.45 27.93H14.565L11.91 25.575C10.365 24.315 10.365 23.3401 11.535 21.8551L16.215 15.9451C16.545 15.5401 16.92 15.2551 17.325 15.1201C17.76 14.9701 18.24 14.9701 18.675 15.1201C19.08 15.2701 19.455 15.5401 19.785 15.9451L24.465 21.8551C25.635 23.3401 25.59 24.27 24.105 25.575Z" fill="#7800FF"/>
  </svg>,
    upload: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path opacity="0.4" d="M33 16.14C33 15.435 32.43 14.85 31.71 14.85H4.29C3.57 14.85 3 15.42 3 16.14C3 24.975 9.165 31.14 18 31.14C26.835 31.14 33 24.96 33 16.14Z" fill="#7800FF"/>
    <path d="M18.795 5.19L23.07 9.45C23.505 9.885 23.505 10.605 23.07 11.04C22.635 11.475 21.915 11.475 21.48 11.04L19.125 8.7V23.055C19.125 23.67 18.615 24.18 18 24.18C17.385 24.18 16.875 23.67 16.875 23.055V8.7L14.535 11.055C14.1 11.49 13.38 11.49 12.945 11.055C12.72 10.83 12.6 10.545 12.6 10.26C12.6 9.975 12.705 9.69 12.93 9.465L17.205 5.205C17.64 4.755 18.36 4.755 18.795 5.19Z" fill="#3A2969"/>
  </svg>,
    sale: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path opacity="0.4" d="M5.98499 21.99L3.70501 19.71C2.77501 18.78 2.77501 17.25 3.70501 16.32L5.98499 14.04C6.37499 13.65 6.68999 12.885 6.68999 12.345V9.12002C6.68999 7.80002 7.77 6.71996 9.09 6.71996H12.315C12.855 6.71996 13.62 6.405 14.01 6.015L16.29 3.73498C17.22 2.80498 18.75 2.80498 19.68 3.73498L21.96 6.015C22.35 6.405 23.115 6.71996 23.655 6.71996H26.88C28.2 6.71996 29.28 7.80002 29.28 9.12002V12.345C29.28 12.885 29.595 13.65 29.985 14.04L32.265 16.32C33.195 17.25 33.195 18.78 32.265 19.71L29.985 21.99C29.595 22.3799 29.28 23.145 29.28 23.685V26.91C29.28 28.23 28.2 29.31 26.88 29.31H23.655C23.115 29.31 22.35 29.625 21.96 30.015L19.68 32.295C18.75 33.225 17.22 33.225 16.29 32.295L14.01 30.015C13.62 29.625 12.855 29.31 12.315 29.31H9.09C7.77 29.31 6.68999 28.23 6.68999 26.91V23.685C6.68999 23.13 6.37499 22.365 5.98499 21.99Z" fill="#7800FF"/>
    <path d="M22.5 24C21.66 24 20.985 23.325 20.985 22.5C20.985 21.675 21.66 21 22.485 21C23.31 21 23.985 21.675 23.985 22.5C23.985 23.325 23.325 24 22.5 24Z" fill="#3A2969"/>
    <path d="M13.515 15C12.675 15 12 14.325 12 13.5C12 12.675 12.675 12 13.5 12C14.325 12 15 12.675 15 13.5C15 14.325 14.34 15 13.515 15Z" fill="#3A2969"/>
    <path d="M13.5 23.625C13.215 23.625 12.93 23.52 12.705 23.295C12.27 22.86 12.27 22.1399 12.705 21.7049L21.705 12.7049C22.14 12.2699 22.86 12.2699 23.295 12.7049C23.73 13.1399 23.73 13.86 23.295 14.295L14.295 23.295C14.07 23.52 13.785 23.625 13.5 23.625Z" fill="#3A2969"/>
  </svg>,
    
}

const Thing = ({icon, title, description}: {icon: string, title: any, description: string}) => {
    return <div className="bg-[#E6E8FA] lg:bg-[#ECF1F9] px-8 py-10 rounded-[30px]">
        <div className="flex items-center">
            {/* @ts-ignore */}
            {icons[icon]}
        </div>
        <div className="text-[#262626] text-[24px] font-[300] italic mt-10">{title}</div>
        <div className="text-[#828282] text-[18px] font-[400] mt-5">
            {description}
        </div>
    </div>
}

export const ThingsWithElty = () => {
    return <div className="w-full py-[5%] px-[5%] md:px-[10%] relative overflow-hidden z-10">
        <div className="max-w-container mx-auto">
            <div className="text-[68px] font-[300] text-center md:text-left"><span className="font-[600]">ELYT</span> ile yapabilecekleriniz</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md5:grid-cols-3 gap-x-[40px] gap-y-[67px] mt-[67px]">
                <Thing 
                    icon="artwork"
                    title={<>Hedef Kitlenize Yönelik  <span className="font-[600]">Sanatsal Tasarım</span></>}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Thing 
                    icon="upload"
                    title={<><span className="font-[600]">Kural Setleri </span> Sayesinde Yüksek Etkileşim</>}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Thing 
                    icon="sale"
                    title={<>Use Them For <span className="font-[600]">Sale</span></>}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Thing 
                    icon="artwork"
                    title={<>Make Your Own <span className="font-[600]">Artwork</span></>}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Thing 
                    icon="upload"
                    title={<><span className="font-[600]">Upload</span> Your NFT</>}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Thing 
                    icon="sale"
                    title={<>Use Them For <span className="font-[600]">Sale</span></>}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </div>
        
    </div>
};