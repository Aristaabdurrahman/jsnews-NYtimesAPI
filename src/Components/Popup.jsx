const Popup = ({c, price, getcoins, rewards}) => {

    const reload = () => {
        location.reload()
    } 

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered"><div className="modal-content">
                        <div className="modal-header d-flex justify-content-center">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Buy article {getcoins >= price ? "success !!!" : "failed"}</h1>
                        </div>
                        <div className="modal-body text-center">
                            {getcoins >= price ? (
                                <>
                                    <p>
                                        You haved buy article from Ny Times for {price == 0 ? "Free" : price}
                                    </p>
                                    <p>
                                        you have reward for {rewards} coins
                                    </p>
                                    <a href={c.url}>click this link to open full article</a>
                                </>
                            ) : (
                                <>
                                    <p>your coins not enough...</p>
                                </>
                            )}

                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close"
                            onClick={reload}
                            >Continue buy articles</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup
                    