import Navbar from "../Components/Navbar";
import download from "../assets/download.png";
import images from "../assets/images.png";

const User = () => {

    var data = JSON.parse(localStorage.getItem("userBuy"))

    return (
        <>
            <Navbar />
            <div style={{ margin: "50px 0" }} className="d-flex justify-content-center">
                <img src={images} className="rounded-circle" style={{ marginRight: "30px" }} height={130} width={130} />
                <div className="d-flex flex-column">
                    <h1>John Doe</h1>
                    <small>Author</small>
                    <small>Jakarta, Indonesia</small>
                </div>
            </div>
            <hr />
            <div className="container">
                {data == null ? (
                    <h1 className="text-center" style={{ paddingTop: "100px" }}>
                        Your order is empty
                    </h1>
                ) : (
                    <>
                        <h2 className="text-center mb-2">Your Bought Articles</h2>
                        <div className="row">
                            {data.map((d, i) => (
                                <div className="col-4 mt-4" key={i}>
                                    <div className="card">
                                        <img src={download} className="card-img-top" />
                                        <div className="card-body">
                                            <h6 className="card-title">{d.title}</h6>
                                            <small className="user-small">Author : {d.byline}</small>
                                            <br />
                                            <small className="user-small">Posted day : {d.published_date}</small>                                 
                                            <p className="card-text mt-3" style={{fontSize:"15px"}}>{d.abstract}</p>
                                            <hr />
                                            <a href={d.url} className="d-flex justify-content-center">Link to article</a>
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