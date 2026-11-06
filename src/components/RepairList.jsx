import RepairCard from "./RepairCard"
import { initialRepairs } from "../data"

function RepairList() {
    return (
        <div>
            <h2>list des reparations</h2>

            {initialRepairs.map(e => {
                return <RepairCard key={e.id} repair={e} />
            })}
        </div>
    )
}

export default RepairList