import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

function Inactivepeople() {

    const [iausers, setiaUsers] = useState([])

    const nav = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/iausers", { withCredentials: true })
            .then((res) => setiaUsers(res.data))
    }, [iausers]);

    const activevate1 = async (id) => {
        const acti = await axios.get(`http://localhost:5000/acusers/${id}`, { withCredentials: true });
        if (acti) {
            alert("User got activated");
            nav("/dashboard");
        } else {
            alert("User not activated");
            nav("/dashboard");
        }
    }

    return (
        <>
        <Navbar />
            <div className='container-lg pt-5'>
                <div className='row'>
                    <div className='col-lg-12 col-sm-4'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {iausers.map((item, i) => (
                                    <tr key={item._id}>
                                        <td>{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td><button onClick={() => activevate1(item._id)} className='btn btn-success'>Activate the user</button></td>
                                    </tr>
                                )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inactivepeople