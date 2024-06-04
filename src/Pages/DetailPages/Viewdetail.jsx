// import { useEffect, useState } from "react";
// import { mostViewed } from "../../Service/Api";
// import Filter from "../../Components/Filter";
// import Detailcontent from "../../Components/Detailcontent";

// const Viewdetail = () => {

//     const [view, setView] = useState([]);
//     const [filter, setFilter] = useState(1);

//     useEffect(() => {
//         mostViewed(filter).then((v) => {
//             setView(v);
//         })
//     }, [filter])

//     return (
//         <>
//             <div className="container">
//                 <div className="row" style={{ marginTop: "25px" }}>
//                     <div className="col-2">
//                         <Filter setFilter={setFilter}/>
//                     </div>

//                     <div className="col-10">
//                         <Detailcontent content={view} filter={filter} />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Viewdetail;