import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';

function EditPeople() {

    const parid = useParams();
    const id = parid.id;
    const [userdata, setuserData] = useState({username:"", email:"",age:""});

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`, { withCredentials: true }).then((response) => {
            setuserData(response.data);
        })
    }, [id]);

    const navi = useNavigate();

    const hc = async (e) => {
        setuserData({ ...userdata, [e.target.name] : e.target.value });
    }

    const update = async (e) => {
        e.preventDefault();
        const up = await axios.put(`http://localhost:5000/users/${id}`, userdata, { withCredentials: true });
        up ? alert("User updated") : alert("User isn't updated");
        navi("/Dashboard");
    }

    return (
        <>
        <Navbar />
            <div className='container pt-5 mt-5'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <form onSubmit={update}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                value={userdata.name}
                                onChange={hc}
                                required
                            />
                            <br />
                            <input
                                type="email"
                                className="form-control"
                                placeholder="E-mail"
                                name="email"
                                value={userdata.email}
                                onChange={hc}
                                required
                            />
                            <br />
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Age"
                                name="age"
                                value={userdata.age}
                                onChange={hc}
                                required
                            />
                            <br />
                            <button type="submit">Update user details</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditPeople;