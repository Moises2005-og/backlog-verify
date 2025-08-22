export function Header() {

    const headerItems1:string[] = ["Forum", "Stats", "Submit"]
    const headerItems2:string[] = ["Login", "Join"]

    return(
        <header className="flex gap-5 px-[7%] items-center bg-[#0d0d0d] text-white font-semibold">
            <h1 className="text-[40px] font-bold bg-black text-white px-[20px] py-[5px] ">B</h1>
            <input type="text" className="w-[400px] bg-[#282828] px-[20px] py-[10px] rounded font-normal text-[13px] border border-[#404040] focus:outline-0" placeholder="Seacrh your favorite games..."/>
            <nav className="flex justify-between w-full">
                <ul className="flex gap-5">
                    {
                        headerItems1.map((item: string, index: number) => (
                            <li key={index} className="cursor-pointer hover:underline">{item}</li>
                        )) 
                    }
                </ul>
                <ul className="flex gap-5">
                    {
                        headerItems2.map((item: string, index: number) => (
                            <li key={index} className="cursor-pointer hover:underline">{item}</li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}