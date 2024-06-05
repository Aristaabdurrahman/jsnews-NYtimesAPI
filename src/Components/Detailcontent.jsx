import download from "../assets/download.png"
import Popup from "./Popup";

const Detailcontent = ({ content, filter }) => {

    var price = 0;
    let rewards = 0;
    var getcoins = localStorage.getItem("coins")

    if (filter == 1) {
        price = 50000
    } else if (filter == 7) {
        price = 20000
    }

    if (price == 50000) {
        rewards = 20000
    } else if(price == 20000){
        rewards = 10000
    }else{
        rewards = 5000
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
            const balance = (getcoins - price) + rewards
            localStorage.setItem('coins', balance)
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

                                <p className="card-text" style={{ paddingTop: "10px" }}>Abstract : {c.abstract}</p>
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
                                        <Popup c={c} price={price} getcoins={getcoins} rewards={rewards}/>
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