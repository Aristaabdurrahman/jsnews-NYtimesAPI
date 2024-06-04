import { useEffect, useState } from "react";
import { API } from "../../Service/Api";
import Filter from "../../Components/Filter";
import Detailcontent from "../../Components/Detailcontent";
import Navbar from "../../Components/Navbar";

const List = () => {

    const [view, setView] = useState([]);
    const [content, setContent] = useState("viewed");
    const [filter, setFilter] = useState(1);

    useEffect(() => {
        if (content == "shared") {
            API(content, filter, `/facebook`).then((v) => {
                setView(v);
            })
        } else {
            API(content, filter).then((v) => {
                setView(v);
            })
        }
    }, [content, filter])



    return (
        <>
            <Navbar />
            <div className="container" style={{marginTop: "60px"}}>
                <div className="row" style={{ marginTop: "25px" }}>
                    <div className="col-2">
                        <Filter setFilter={setFilter} setContent={setContent} />
                    </div>

                    <div className="col-10">
                        <Detailcontent content={view} filter={filter} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default List;