import React, { useState } from 'react';
import './Login.css';

 
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id.toLowerCase()]: value
        }));
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.email) formErrors.email = "Email address is required";
        if (!formData.password) formErrors.password = "Password is required";
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            setIsSubmitting(true);
            
            setTimeout(() => {
                alert('Login successful');
                setIsSubmitting(false);
                
                setFormData({
                    email: '',
                    password: ''
                });
            }, 2000);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Email">Email address</label>
                    <input
                        type="email"
                        id="Email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input
                        type="password"
                        id="Password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Logging in...' : 'Login'} 
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;




