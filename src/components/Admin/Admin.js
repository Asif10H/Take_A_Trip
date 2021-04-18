// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// const axios = require('axios');
// const Admin = () => {
//     const { register, handleSubmit, watch, errors } = useForm();
//     const [imageURL, setImageURL] = useState(null);


//     const onSubmit = data => {
//         const placeDate = {
//             name: data.name,
//             description: data.description,
//             addPrice: data.addPrice,
//             imageURL: imageURL
//         }
//         const url = `http://localhost:6066/addPlace`
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(placeDate)
//         })
//             .then(res => console.log('server side response'))
//     };

//     const handleImageUpload = place => {
//         const imageData = new FormData();
//         imageData.set('key', 'c5039574c46502e4a3f28eaf9d81b0c0');
//         imageData.append('image', place.target.files[0]);


//         axios.post('https://api.imgbb.com/1/upload',
//             imageData)
//             .then(function (response) {
//                 setImageURL(response.data.data.display_url)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }
    
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-6 mt-5">
//                     <h1>Add Place</h1>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         {/* <input class="form-control" name="name" placeholder="Place name" ref={register} /> */}
//                         <input type="text" defaultValue="" placeholder="Your Name" {...register("name")} className="form-control" />
//                         <br></br>
//                         {/* <input class="form-control" name="description" placeholder="Description" ref={register} /> */}
//                         <input type="text" defaultValue="" placeholder="Your Name" {...register("description")} className="form-control" />
//                         <br></br>
//                         {/* <input class="form-control" name="addPrice" placeholder="Add Price" ref={register} /> */}
//                         <input type="text" defaultValue="" placeholder="Your Name" {...register("addPrice")} className="form-control" />
//                         <br></br>
//                         <input class="form-control" name="exampleRequired" type="file" onChange={handleImageUpload} />
//                         <br></br>
//                         <input type="submit" />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Admin;