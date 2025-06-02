import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

function Add() {

    const [dt, sDT] = useState({ username: "", email: "", age: "" });
    const navi = useNavigate();
    const hc = async (e) => {
        sDT({ ...dt, [e.target.name]: e.target.value });
    }

    const add = async (e) => {
        e.preventDefault();
        const lt = await axios.post("http://localhost:5000/users", dt, { withCredentials: true });
        alert(lt.data.message || lt.data.message1);
        navi("/dashboard");
    }

    return (
        <>
        <Navbar />
            <div className='container pt-5 mt-5'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='addc'>
                            
                            <h2 className='mb-3'>Add People</h2>
                            <form onSubmit={add}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    name="username"
                                    value={sDT.username}
                                    onChange={hc}
                                    required
                                />
                                <br />
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="E-mail"
                                    name="email"
                                    value={sDT.email}
                                    onChange={hc}
                                    required
                                />
                                <br />
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Age"
                                    name="age"
                                    value={sDT.age}
                                    onChange={hc}
                                    required
                                />
                                <br />
                                <button className="btn btn-success" type="submit">Add user</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add;