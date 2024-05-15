import { useParams } from "react-router-dom";

export function HousingDetails() {
    const {id} = useParams()

    return <>
        <div>Slt sv? c la paj {id}</div>
    </>
}