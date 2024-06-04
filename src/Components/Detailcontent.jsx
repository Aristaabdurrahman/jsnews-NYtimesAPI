import download from "../assets/download.png"

const Detailcontent = ({ content, filter }) => {

    var price = 0;
    var getcoins = localStorage.getItem("coins")

    if (filter == 1) {
        price = 50000
    } else if (filter == 7) {
        price = 20000
    }


    //set array for user bought articles

    let old_data = JSON.parse(localStorage.getItem('userBuy'))
    
    if (old_data == null) {
        localStorage.setItem('userBuy', JSON.stringify([]))
    }

    const buy = (event) => {
        const artcID = event.target.dataset.id;
        event.preventDefault()

        if (getcoins >= price) {
            old_data.push(content[artcID])
            localStorage.setItem('userBuy', JSON.stringify(old_data))
            localStorage.setItem('coins', getcoins - price)
        } else {
            console.log("your balance not enough")
        }
    }

    return (
        <>
            {content.map((c, i) => (
                <div className="card mb-3" key={i}>
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img src={download} className="img-fluid rounded-start" style={{ height: "100%" }} />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">{c.title}</h5>
                                <small className="text-body-secondary">Author : {c.byline}</small><br />
                                {c.subsection != '' ? (
                                    <small className="text-body-secondary">subsection : {c.subsection}</small>
                                ) : (
                                    <small className="text-body-secondary"></small>
                                )}

                                <p className="card-text" style={{ paddingTop: "10px" }}>{c.abstract}</p>
                                <a href={c.url} style={{ fontSize: "15px" }}>Link : {c.url}</a>
                                <div className="d-flex" style={{ paddingTop: "20px" }}>
                                    <div className=" flex-grow-1 mt-3">Publish date : {c.published_date}</div>
                                    <div className="p-2 mt-2">Price : {price == 0 ? "Free" : price}</div>
                                    <div className="p-2">
                                        <button type="submit" className="btn btn-secondary" data-id={i}
                                            onClick={buy}
                                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        >
                                            Buy Article
                                        </button>
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Buy Articles Success...</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body text-center">
                                                        You haved buy article from Ny Times for {price == 0 ? "Free" : price}
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary">Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default Detailcontent;