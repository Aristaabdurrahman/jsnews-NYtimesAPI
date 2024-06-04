import Navbar from "../Components/Navbar";
import download from "../assets/download.png";

const User = () => {

    var data = JSON.parse(localStorage.getItem("userBuy"))

    return (
        <>
            <Navbar />
            <div style={{ margin: "50px 0" }} className="d-flex justify-content-center">
                <img src={download} className="rounded-circle" style={{ marginRight: "30px" }} height={130} width={130} />
                <div className="d-flex flex-column">
                    <h1>John Doe</h1>
                    <small>Author</small>
                    <small>Jakarta, Indonesia</small>
                </div>
            </div>
            <hr />
            <div className="container">
                {data == null ? (
                    <h1 className="text-center" style={{paddingTop:"100px"}}>
                        Your order is empty
                    </h1>
                ) : (
                    <>
                        <h2 className="text-center">Your Bought Articles</h2>
                        <div className="row">
                            {data.map((d, i) => (
                                <div className="col-4" key={i}>
                                    <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
                                        <div className="card-header">{d.published_date}</div>
                                        <div className="card-body text-secondary">
                                            <h5 className="card-title">{d.title}</h5>
                                            <p className="card-text">{d.abstract}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

            </div>
        </>
    )
}

export default User;