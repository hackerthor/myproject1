import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser, user }) {
    const [data, formData] = useState({ username: "", password: "" });
    const navi = useNavigate();
    const hc = async (e) => {
        formData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        await axios.post("http://localhost:5000/login", data, { withCredentials: true })
            .then((res) => {
                setUser(res.data.loggeduser);
                navi("/Dashboard")
            })
            .catch(() => { navi("/login") })
    };

    return (
        <div className="container pt-5 mt-5">
            <div className="row">
                <div className="formc">
                    <div className="col-lg-12">
                        <h2>Login Here</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                value={formData.username}
                                onChange={hc}
                                required
                            />
                            <br />
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={hc}
                                required
                            />
                            <br />
                            <button className="btn btn-primary" type="submit">Login</button>
                            <Link className="btn btn-primary" to="/signup">Not In? Sign Up!</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;