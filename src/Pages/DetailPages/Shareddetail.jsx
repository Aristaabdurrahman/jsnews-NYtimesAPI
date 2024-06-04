// import { useEffect, useState } from "react";
// import { mostShared } from "../../Service/Api";
// import Filter from "../../Components/Filter";
// import Detailcontent from "../../Components/Detailcontent";


// const Shareddetail = () => {

//     const [shared, setShared] = useState([]);
//     const [filter, setFilter] = useState(1);

//     useEffect(() => {
//         mostShared(filter).then((s) => {
//             setShared(s);
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
//                         <Detailcontent content={shared} filter={filter}/>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Shareddetail;