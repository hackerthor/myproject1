import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [formData, SetFormData] = useState({ username: "", password: "" });
    const [save, setsave] = useState(null);
    const usr = useNavigate();

    const hc = (e) => {
        SetFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/signup", formData, { headers: { "Content-Type": "application/json" } });
            if(res){
                setsave(res.data.message);
                setTimeout(()=>{
                    usr("/login");
                }, 2000);
                SetFormData({ username: "", password: "" });
            }else{
                alert(res.data.message1);
            }
        }
        catch (error) {
            console.error("Error submitting form data:", error);
        }
    };

    return (
        <div className="container pt-5 mt-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="formc1 animate__animated animate__lightSpeedInRight">
                    {save ? <p style={{display:"block"}} className="success">User details saved</p>: <p className="failure">User details not saved</p>}
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            className="form-control"
                            name="username"
                            value={formData.username}
                            onChange={hc}
                            required
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={hc}
                            required
                        />
                        <br />
                        <button className="btn btn-primary" type="submit">Sign Up</button>
                        <Link className="btn btn-info" to="/login">Already In? Sign In</Link>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;