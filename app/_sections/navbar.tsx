const ElytLogo = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179 31" fill="none">
        <path d="M7.19222 25.2768V18.15H21.7091V12.6066H7.19222V12.5679H0V31.0141H24.208V25.2768H7.19222ZM7.19222 5.92072H24.208V0.201004H0V5.92072H7.19222ZM51.6343 0H58.9161V25.1498H74.6967V31.0141H51.6343V0ZM161.648 5.84314H151.577V0H179V5.84314H168.929V31.0141H161.648V5.84314ZM122.93 0L117.814 8.37857L121.315 14.3451L130.072 0H122.93ZM106.104 0H98.3713L110.543 19.9238V31.0141H117.832V20.0155L106.376 0.479587L106.104 0Z" fill="url(#paint0_linear_574_2341)"/>
        <defs>
        <linearGradient id="paint0_linear_574_2341" x1="0" y1="15.4982" x2="179" y2="15.4982" gradientUnits="userSpaceOnUse">
            <stop stop-color="#D158C7"/>
            <stop offset="0.23" stop-color="#AA6BD1"/>
            <stop offset="0.36" stop-color="#A469CD"/>
            <stop offset="0.53" stop-color="#9563C0"/>
            <stop offset="0.72" stop-color="#7B59AC"/>
            <stop offset="0.93" stop-color="#564B8F"/>
            <stop offset="1" stop-color="#484684"/>
        </linearGradient>
        </defs>
    </svg>
}

export const Navbar = () => {
    return <div className="w-full bg-white py-6">
        <div className="mx-auto w-[230px]">
            <ElytLogo />
        </div>
    </div>
};