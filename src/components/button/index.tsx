"use client"

type sendButton = {
    onclick: any,
    text: string,
    loading: boolean | null
}

export const SendButton = ({text, onclick, loading}: sendButton) => {
    return (
            <button onClick={onclick} className="bg-[#277bbd] hover:text-[#277bbd] hover:font-bold text-center hover:bg-transparent transition-all duration-300 text-white z-100 py-[8px] px-[35px] rounded cursor-pointer font-bold text-shadow-2xs border-[2px] border-blue-200">{
                loading ? "carregando..." : text
                }
            </button>
    )
}
