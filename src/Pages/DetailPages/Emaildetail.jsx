// import { useEffect, useState } from "react";
// import { mostEmail } from "../../Service/Api";
// import Filter from "../../Components/Filter";
// import Detailcontent from "../../Components/Detailcontent";

// const Emaildetail = () => {

//     const [email, setEmail] = useState([]);
//     const [filter, setFilter] = useState(1);

//     useEffect(() => {
//         mostEmail(filter).then((e) => {
//             setEmail(e);
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
//                         <Detailcontent content={email} filter={filter}/>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Emaildetail;