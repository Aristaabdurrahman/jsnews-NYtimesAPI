const Filter = ({ setFilter, setContent }) => {

    return (
        <>
            <div style={{marginBottom: "50px"}}>
                <h5>Filter</h5>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="content" id="content1"
                        value={'viewed'}
                        onChange={e => setContent(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="content1">
                        Most Viewed
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="content" id="content2"
                        value={'shared'}
                        onChange={e => setContent(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="content2">
                        Most Shared
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="content" id="content3"
                        value={'emailed'}
                        onChange={e => setContent(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="content3">
                        Most Emailed
                    </label>
                </div>
            </div>
            <div>
                <h5>Period</h5>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                        value={1}
                        onChange={e => setFilter(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Publish in 1 day ago
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                        value={7}
                        onChange={e => setFilter(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Publish in 7 day ago
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                        value={30}
                        onChange={e => setFilter(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        Publish in 30 day ago
                    </label>
                </div>
            </div>
        </>
    )

}

export default Filter;