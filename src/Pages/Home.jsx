import { useEffect, useState } from "react";
import Emailed from "../Components/HomeComponent/Emailed";
import Shared from "../Components/HomeComponent/Shared";
import Viewed from "../Components/HomeComponent/Viewed";
import { API } from "../Service/Api";
import Navbar from "../Components/Navbar";

const Home = () => {

    const [view, setView] = useState();
    const [shared, setShared] = useState([]);
    const [email, setEmail] = useState([]);


    useEffect(() => {
        API("viewed", 1).then((v) => {
            setView(v)
        })
    }, [])

    useEffect(() => {
        API("shared", 1, `/facebook`).then((s) => {
            setShared(s);
        })
    }, [])

    useEffect(() => {
        API("emailed", 1).then((e) => {
            setEmail(e);
        })
    }, [])

    return (
        <>
            <div id="landingpage">
                <Navbar />
                <div id="intro">
                    <h4>
                        Welcome to Delosnews
                    </h4>
                    <p>Get NY TImes most popular articles start from 0 Coins</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Viewed view={view} />
                    </div>
                    <div className="col-4">
                        <Shared shared={shared} />
                    </div>
                    <div className="col-4">
                        <Emailed email={email} />
                    </div>
                    <hr />
                    <p className="text-center mb-4">
                        <a href="/list-articles">Show more in Articles list page</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;