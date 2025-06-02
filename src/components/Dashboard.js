import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

function Dashboard({user, setUser}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/users", { withCredentials: true }).then((res) => {
            setData(res.data);
        })
    }, [data]);

    const delet = async (id) =>{
        const st = await axios.delete(`http://localhost:5000/users/${id}`, { withCredentials: true });
        st ? alert(st.data.message) : alert(st.data.message1);
    }

    return (
        <>
            <Navbar setUser={setUser}/>
            <div className='container-lg pt-5'>
                <div className='row'>
                    <div className='col-lg-12 col-sm-4'>
                        <h2 className='text-center'>Welcome to My App {user}</h2>
                        <div className='buton'>
                        </div>
                        <table className='table table-danger table-bordered'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th>Age</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, i) => (
                                    <tr key={item._id}>
                                        <td>{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.age}</td>
                                        <td><Link className='btn btn-primary' to={`/edit/${item._id}`}>Edit</Link><button onClick={()=>delet(item._id)} className='btn btn-danger'>Delete</button></td>
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

export default Dashboard;