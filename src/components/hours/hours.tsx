export function Hours() {
    return(
        <div className="bg-blue-400 text-white px-[5%] flex justify-center py-10 font-bold ">
            <div>
                <h2 className="text-center mb-5 text-[28px]">New in the Last 48 Hours</h2>
                <ul className="flex gap-10">
                    <li className="cursor-pointer hover:underline">7854 Game(s) Updated</li>
                    <li className="cursor-pointer hover:underline">341 New Users</li>
                    <li className="cursor-pointer hover:underline">20370 New Backlogs</li>
                    <li className="cursor-pointer hover:underline">5648 Games Completed</li>
                    <li className="cursor-pointer hover:underline">2 New Thread(s)</li>
                    <li className="cursor-pointer hover:underline">38 New Post(s)</li>
                </ul> 
            </div>
        </div>
    )
}