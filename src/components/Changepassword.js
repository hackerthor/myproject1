import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';

function Changepassword() {

    const [pass, setPass] = useState("");
    const navi = useNavigate();

    const parid = useParams();
    const id = parid.id;

    const edit = async () => {

        const editpassword = await axios.post(`http://localhost:5000/cp/${id}`, { pass }, { withCredentials: true });
        if (editpassword) {
            alert(editpassword.data.message);
            navi("/dashboard");
        } else {
            alert(editpassword.data.message1);
            navi("/dashboard");
        }


    }

    return (
        <>
            <Navbar />
            <div className='container pt-5 mt-5'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='edit-pass'>
                            <h2 className='mb-3'>Reset passwrod Here</h2>
                            <form onSubmit={edit} method='post'>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    required
                                />
                                <br />
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    value={pass}
                                    readOnly
                                />
                                <br />
                                <button className="btn btn-primary" type="submit">Reset Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Changepassword;