const Shared = ({ shared }) => {
    return (
        <>
            <div className="card border-light mb-3" style={{ marginBottom: "50px" }}>
                <div className="card-header">Most Shared Articles</div>
                {shared && shared.slice(0, 3).map((s) => (
                    <div className="card-body" key={s.asset_id}>
                        <h5 className="card-title">{s.title}</h5>
                        <p className="card-text">{s.abstract}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Shared;