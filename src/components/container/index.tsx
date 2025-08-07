import { ReactNode } from "react"
import { Header } from "../header"

type ContainerProps = {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {
    return (
        <>  
            <Header />
            <div className="px-[5%]">
                {children}
            </div>
        </>
    )
}