import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
const AddReview = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('review', info.review);

        fetch('https://mighty-springs-80713.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
            <h5 className="text-brand">Add A Review</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group p-2 pr-3">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                </div>
                <div className="form-group p-2 pr-3">
                    <label htmlFor="exampleInputEmail1">Your Review</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="review" placeholder="Enter review" />
                </div>
                <div className="form-group p-2 pr-3">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary p-2 pr-5">Submit</button>
            </form>
        </div>
    </section>
    );
};

export default AddReview;