export function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return(
        <>
            <div className="bg-[#333333] flex justify-between p-10">
                <ul className="flex flex-col gap-2 text-[#37a4ca]">
                    <li className="text-white font-bold">Social</li>
                    <li>Discord</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
                <ul className="flex flex-col gap-2 text-[#37a4ca]">
                    <li className="text-white font-bold">Information</li>
                    <li>AdChoices</li>
                    <li>Contact Us</li>
                    <li>Code of Conduct</li>
                    <li>Privacy Policy</li>
                </ul>
                <div className="flex flex-col gap-2 text-white">
                    <h2 className="font-bold">HowLongToBeat</h2>
                    <p className="w-[650px] text-justify">© {year} HowLongToBeat, an IGN Entertainment Inc. brand. All rights reserved. No part of this website or its content may be reproduced without the copyright owner’s permission. HowLongToBeat® is a registered trademark of IGN Entertainment, Inc., and may only be used with explicit written permission. Accessibility | Terms of Use</p>
                </div>
            </div>
        </>
    )
}