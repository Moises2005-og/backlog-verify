"use client"

type sendButton = {
    onclick: any,
    text: string,
    loading: boolean | null
}

export const SendButton = ({text, onclick, loading}: sendButton) => {
    return (
            <button onClick={onclick} className="bg-blue-500 text-center hover:bg-blue-400 transition-all duration-100 text-white z-100 py-[6px] px-[15px] rounded cursor-pointer">{
                loading ? "carregando..." : text
                }
            </button>
    )
}
