export function Header() {
    return(
        <header className="flex gap-5 px-[7%] items-center bg-[#0d0d0d] text-white font-semibold">
            <h1 className="text-[40px] font-bold bg-black text-white px-[20px] py-[5px] ">B</h1>
            <input type="text" className="w-[400px] bg-[#282828] px-[20px] py-[10px] rounded font-normal text-[13px] border border-[#404040] focus:outline-0" placeholder="Seacrh your favorite games..."/>
            <nav className="flex justify-between w-full">
                <ul className="flex gap-5">
                    <li>Forum</li>
                    <li>Stats</li>
                    <li>Submit</li>
                </ul>
                <ul className="flex gap-5">
                    <li>Login</li>
                    <li>Join</li>
                </ul>
            </nav>
        </header>
    )
}