import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const axios = require('axios');
const AddPlace = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const placeDate = {
            name: data.name,
            description: data.description,
            addPrice: data.addPrice,
            imageURL: imageURL
        }
        const url = `https://mighty-springs-80713.herokuapp.com/addPlace`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(placeDate)
        })
            .then(res => console.log('server side response'))
    };

    const handleImageUpload = place => {
        const imageData = new FormData();
        imageData.set('key', 'c5039574c46502e4a3f28eaf9d81b0c0');
        imageData.append('image', place.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <h1>Add A Tourist Place</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" name="name" placeholder="Place Name" {...register("name")} />
                    <br></br>
                    <input className="form-control" name="description" placeholder="Place Description" {...register("description")} />
                    <br></br>
                    <input className="form-control" name="addPrice" placeholder="Price" {...register("addPrice")} />
                    <br></br>
                    <input class="form-control" name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br></br>
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddPlace;