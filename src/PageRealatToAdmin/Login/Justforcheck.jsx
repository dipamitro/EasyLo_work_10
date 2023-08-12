import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const AdminDashboard = () => {
  return <h2>Welcome to Admin Dashboard!</h2>;
};

const LoginPage = ({ handleLogin, loggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div>
      <h1>Restaurant Admin Panel</h1>
      {loggedIn ? (
        <div>
          <p>You are logged in. Access the admin dashboard:</p>
          <Link to="/adminDashboard">Admin Dashboard</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
};

const Justforcheck = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate a successful login (replace with actual login logic)
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      console.error('Invalid username or password');
    }
  };

  return (
    <Router>
      <div>
        <Route
          path="/"
          exact
          render={() => <LoginPage handleLogin={handleLogin} loggedIn={loggedIn} />}
        />
        <Route path="/adminDashboard" component={AdminDashboard} />
      </div>
    </Router>
  );
};

export default Justforcheck;

  
























// const Justforcheck = () => {
//   const [userToken, setUserToken] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const loginUrl = 'https://restaurantapi.bssoln.com/api/Auth/SignIn';
//     const userData = {
//       userName: username,
//       password: password
//     };

//     fetch(loginUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'Justforchecklication/json'
//       },
//       body: JSON.stringify(userData)
//     })
//       .then(response => response.json())
//       .then(data => {
//         const token = data.token; // Assuming the response contains a token
//         setUserToken(token);
//         console.log('Logged in and token stored.');
//       })
//       .catch(error => {
//         console.error('Login Error:', error);
//       });
//   };

//   const handleAccessDashboard = () => {
//     const dashboardUrl = 'https://restaurantapi.bssoln.com/api/AdminDashboard';

//     fetch(dashboardUrl, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${userToken}`
//       }
//     })
//       .then(response => response.json())
//       .then(dashboardData => {
//         console.log('Admin Dashboard Data:', dashboardData);
//         // Display the dashboard data on the webpage
//       })
//       .catch(error => {
//         console.error('Dashboard Error:', error);
//       });
//   };

//   return (
//     <div className='body1'>

//         <div className="limiter">
//             <div className="container-login100">
//               <div className="wrap-login100">
//               <div className="login100-form-title" style={{backgroundImage: 'url(	https://preview.colorlib.com/theme/feliciano/images/bg_1.jpg)'}}>
//               <span className="login100-form-title-1">
//                 Sign In 
                
//               </span>
//               <span className="login100-form-title-1">
                
//                 ChikenKo
//               </span>
//             </div>
//             {userToken ? (
//         <div>
//           <button onClick={handleAccessDashboard}>Access Admin Dashboard</button>
//         </div>
//       ) : (
         
//         <div className="login100-form validate-form">
//             <div>

//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//             </div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleLogin}>Log In</button>
//         </div>
//       )}
                
//                 </div>  
//             </div>

//         </div>
//       {/* <h1>Restaurant Admin Panel</h1>
//       {userToken ? (
//         <div>
//           <button onClick={handleAccessDashboard}>Access Admin Dashboard</button>
//         </div>
//       ) : (
//         <div>
//             <div>

//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//             </div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleLogin}>Log In</button>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default Justforcheck;
