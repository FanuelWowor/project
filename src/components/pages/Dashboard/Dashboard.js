import React, { useState, useEffect } from 'react';
import firebase from '../../../config/firebase';


const Dashboard = () => {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState([]);
useEffect(() => {
    firebase
    .database()
    .ref("products")
    .once("value", (res) =>{
    if(res.val()){
        const rawData = res.val();
        const productArr = [];
        Object.keys(rawData).map(item => productArr.push({
           id: item,
           ...rawData[item], 
        })
        );
        setProduct(productArr);
    }
    });
}, []);
const resetForm = () => {
        setProductName("")
        setCategory("")
        setPrice("")
    };
const onSubmit = () => {
    const data = {
        productName: productName,
        category: category,
        price: price
    };
    firebase.database().ref("products").push(data);
    resetForm();
}    
    return(
    <div className="container mt-5">
        <h3>Dashboard</h3>
        
            <p>Product Name<br/><input placeholder="Type Product Name" className="form-control" value={productName} onChange={(e)=> setProductName(e.target.value)} /></p>
            <p>Category<br/><input placeholder="Type Category" className="form-control" value={category} onChange={(e)=> setCategory(e.target.value)} /></p>  
            <p>Price<br/><input placeholder="Type Price" className="form-control" value={price} onChange={(e)=> setPrice(e.target.value)} /></p>
            <p><button className="btn btn-primary" onClick={onSubmit}>Save</button></p>    
        
        <hr/>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map(item => (
                        <tr key={item.id}>
                            <td>{item.productName}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className="btn btn-success">Update</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    );
}

export default Dashboard;