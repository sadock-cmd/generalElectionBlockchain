import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import { MdRemoveRedEye } from "react-icons/md"
import { MdDelete } from "react-icons/md"
import { RiEdit2Fill } from "react-icons/ri"
import { BsListNested } from "react-icons/bs"
import { GiOpenedFoodCan } from "react-icons/gi"
import firebase from '../firebase'
import { v4 as uuidv4 } from 'uuid'
const Admin = (props) => {
    const [dishes, setDish] = useState([]);
    const ref = firebase.firestore().collection("dishes")
    useEffect(() => {
        loadDishes()
    }, [])
    const loadDishes = () => {
        ref.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setDish(items)
        })
    }
    const deleteDish = (dish) => {
        ref.doc(dish.id).delete()
        loadDishes();
    }
    return (
        <div>
            <Navbar handleLogout={props.handleLogout} />
            <div className="container">
                <div className="py-4">
                    <div className="d-flex justify-content-between">
                        <h3><span className="badge badge-success d-inline-flex py-2"><BsListNested /> Dish List</span></h3>
                        <Link className="btn btn-outline-dark d-inline-flex mb-2" to="/admin/AddDish">Add Dish</Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table border shadow">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col"><GiOpenedFoodCan /></th>
                                    <th scope="col">Dish Name</th>
                                    <th scope="col">Protein(g)</th>
                                    <th scope="col">Carbs(g)</th>
                                    <th scope="col">Fats(g)</th>
                                    <th scope="col">Calories(kcal)</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dishes.map((dish, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{dish.Dishname}</td>
                                            <td>{dish.ProteinValue}</td>
                                            <td>{dish.Carbohydrates}</td>
                                            <td>{dish.Fats}</td>
                                            <td>{dish.ProteinValue * 4 + dish.Carbohydrates * 4 + dish.Fats * 9}</td>
                                            <td>
                                                <Link className="btn btn-primary m-2" to={`/admin/ViewDish/${dish.id}`}><MdRemoveRedEye /></Link>
                                                <Link className="btn btn-outline-primary m-2" to={`/admin/EditDish/${dish.id}`}><RiEdit2Fill /></Link>
                                                <Link className="btn btn-danger m-2" onClick={() => deleteDish(dish)}><MdDelete /></Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
