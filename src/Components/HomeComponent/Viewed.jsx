const Viewed = ({ view }) => {
    let num = 0

    return (
        <>
            <div className="card border-light mb-3" style={{ marginBottom: "50px" }}>
                <div className="card-header">Most Shared Articles</div>
                {view && view.slice(0, 3).map((v, i) => (
                    <div className="card-body" key={i}>
                        <h5 className="card-title">{v.title}</h5>
                        <p className="card-text">{v.abstract}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Viewed;