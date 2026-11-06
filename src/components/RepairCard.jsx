function RepairCard({repair}){
    return (
        <div>
            <h3>{repair.device}</h3>
            <div>{repair.status}</div>
        </div>
    )
}

export default RepairCard