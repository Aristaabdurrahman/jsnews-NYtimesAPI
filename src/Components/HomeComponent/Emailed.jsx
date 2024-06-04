const Emailed = ({ email }) => {
    return (
        <>
            <div className="card border-light mb-3">
                <div className="card-header">Most Emailed Articles</div>
                {email && email.slice(0, 3).map((el) => (
                    <div className="card-body" key={el.asset_id}>
                        <h5 className="card-title">{el.title}</h5>
                        <p className="card-text">{el.abstract}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Emailed;