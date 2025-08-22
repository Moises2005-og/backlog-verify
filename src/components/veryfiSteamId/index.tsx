import { Container } from "../container";

export function VeryfiSteamId() {
    return (
        <>
        <Container>
            <div className="bg-[]">
                <h2>HowLongToBeat™ Your Steam?</h2>
                <div className="flex gap-5">
                    <input type="text" placeholder="Enter your SteamID" />
                    <button>Estimate Time</button>
                </div>
            </div>
        </Container>
        </>
    )
}