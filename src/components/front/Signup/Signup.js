// import React, { useState } from 'react';
// import './Signup.css';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [id.toLowerCase()]: value
//         }));
//     };

//     const validate = () => {
//         let formErrors = {};
//         if (!formData.name) formErrors.name = "Full Name is required";
//         if (!formData.email) {
//             formErrors.email = "Email address is required";
        
//         }
//         else if (!formData.password) formErrors.password = "Password is required";
//         return formErrors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formErrors = validate();
//         setErrors(formErrors);

//         if (Object.keys(formErrors).length === 0) {
//             setIsSubmitting(true);
//             setTimeout(() => {
//                 alert('Registration successful');
//                 setIsSubmitting(false);
//                 setFormData({
//                     name: '',
//                     email: '',
//                     password: ''
//                 });
//             }, 2000);
//         }
//     };

//     return (
//         <div className="signup-container">
//             <h1>Register</h1>
//             <hr />
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="Name">Full Name</label>
//                     <input
//                         type="text"
//                         id="Name"
//                         placeholder="Enter Your Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                     />
//                     {errors.name && <span className="error">{errors.name}</span>}
//                 </div>
//                 <div>
//                     <label htmlFor="Email">Email address</label>
//                     <input
//                         type="email"
//                         id="Email"
//                         placeholder="name@example.com"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     {errors.email && <span className="error">{errors.email}</span>}
//                 </div>
//                 <div>
//                     <label htmlFor="Password">Password</label>
//                     <input
//                         type="password"
//                         id="Password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                     {errors.password && <span className="error">{errors.password}</span>}
//                 </div>
//                 <div>
//                     <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
//                 </div>
//                 <div>
//                     <button type="submit" disabled={isSubmitting}>
//                         {isSubmitting ? 'Registering...' : 'Register'}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
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
        if (!formData.name) formErrors.name = "Full Name is required";
        if (!formData.email) {
            formErrors.email = "Email address is required";
        } else if (!formData.password) {
            formErrors.password = "Password is required";
        }
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            setIsSubmitting(true);
            fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                alert('Registration successful');
                setIsSubmitting(false);
                setFormData({
                    name: '',
                    email: '',
                    password: ''
                });
            })
            .catch(error => {
                console.error('Error:', error);
                setIsSubmitting(false);
            });
        }
    };

    return (
        <div className="signup-container">
            <h1>Register</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Name">Full Name</label>
                    <input
                        type="text"
                        id="Name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
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
                    <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
                </div>
                <div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Registering...' : 'Register'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
