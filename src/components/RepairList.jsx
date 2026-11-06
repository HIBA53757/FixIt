import RepairCard from "./RepairCard"
import { initialRepairs } from "../data"
import { useState } from "react"

function RepairList() {
    const [filter, setFilter] = useState('tous');
    const [add, setAdd] = useState('')
    const [repairs, setRepairs] = useState(initialRepairs);

    const filteredRepairs = filter === 'tous' ? repairs : repairs.filter((e) => {
        return e.status === filter
    })

    function submit(e) {
        e.preventDefault();

        if (!add.trim()){
            return;
        }

        const newDevice = {
            id: repairs.length +1,
            device:add.trim(),
            status: "recu"
        }
        setRepairs([...repairs, newDevice]);
        setAdd("")

    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" value={add} onChange={(e) => {
                    setAdd(e.target.value)
                }} />
                <button type="submit">Ajouter</button>
            </form>

            <h2>list des reparations</h2>
            <button onClick={() => setFilter("tous")}>Tous</button>

            <button onClick={() => setFilter("recu")}>Reçu</button>

            <button onClick={() => setFilter("en cours")}>En cours</button>

            <button onClick={() => setFilter("termine")}>Terminé</button>

            {filteredRepairs.length ? <p>{filteredRepairs.length} reparations</p> : <p>Aucune reparation</p>}

            {filteredRepairs.map(e => {
                return <RepairCard key={e.id} repair={e} />
            })}
        </div>
    )
}

export default RepairList