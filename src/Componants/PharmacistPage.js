// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import './PharmacistPage.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome for icons

// function PharmacistPage() {
//     const [orders, setOrders] = useState([]);
//     const [unseenCount, setUnseenCount] = useState(0);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
//     const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false); // State to toggle shop dropdown
    

//     useEffect(() => {
//         const fetchOrders = async () => {
//           const response = await axios.get('/api/orders/new');
//           setOrders(response.data);
//           setUnseenCount(response.data.filter(order => !order.seen).length);
//         };
//         fetchOrders();
//         const interval = setInterval(fetchOrders, 10000); // Poll every 10 seconds
//         return () => clearInterval(interval);
//       }, []);

//       // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Mark order as seen and accept it
//   const acceptOrder = async (orderId) => {
//     try {
//       await axios.post(`/api/orders/accept/${orderId}`);
//       setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
//       setUnseenCount(prev => prev - 1);
//     } catch (error) {
//       console.error('Error accepting order:', error);
//     }
//   };

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
//   const toggleShopDropdown = () => setIsShopDropdownOpen(!isShopDropdownOpen); // Toggle shop dropdown

//   return (
//     <div className="pharmacist-page">
//       <nav className="navbar">
//         <div className="navbar-logo">
//           {/* You can add a logo here if needed */}
//         </div>

//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a className="nav-link" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//   <a className="nav-link" href="#" onClick={toggleShopDropdown}>Shop</a>
//   {isShopDropdownOpen && (
//     <div className="shop-dropdown">
//       <ul>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Ayurvedic-Care.jpg" alt="Ayurvedic Care" />
//           <span>Ayurvedic Care</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/baby-care.jpg" alt="Baby Care" />
//           <span>Baby Care</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Blood-Pressure-Monitor.jpg" alt="Blood Pressure Monitor" />
//           <span>Blood Pressure Monitor</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Collaborated-Brands.jpg" alt="Collaborated Brands" />
//           <span>Collaborated Brands</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Diabetes-Care.jpg" alt="Diabetes Care" />
//           <span>Diabetes Care</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/First-Aid-Items.jpg" alt="First Aid Items" />
//           <span>First Aid Items</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Nebulizer.jpg" alt="Nebulizer" />
//           <span>Nebulizer</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Personal-Care.jpg" alt="Personal Care" />
//           <span>Personal Care</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Food-Supplements.jpg" alt="Food Supplements" />
//           <span>Food Supplements</span>
//         </li>
//       </ul>
//     </div>
//   )}
// </li>

//           <li className="nav-item">
//             <a className="nav-link" href="#" onClick={toggleShopDropdown}>Brands</a>
//             {isShopDropdownOpen && (
//               <div className="shop-dropdown">
//                 <ul>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/FL.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/RS.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/BR.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/SP.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/CM.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/AC.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/KW.jpg"/>
//                 </ul>
//               </div>
//             )}
//           </li>
//           <li className="nav-item">
//           <Link className="nav-link" to="/about">About Us</Link> {/* Link to About Us page */}
//         </li>

//         <li className="nav-item">
//           <Link className="nav-link" to="/contact">Contact Us</Link> {/* Link to Contact Us page */}
//         </li>

//         <div className="notification-bell">
//         <button className="bell-button" onClick={toggleDropdown}>
//                 <i className="fa-solid fa-bell" style={{ color: '#000000' }}></i>
//                     {unseenCount > 0 && <span className="badge">{unseenCount}</span>}
//         </button>
//           {isDropdownOpen && (
//             <div className="notifications-dropdown">
//               {orders.length === 0 ? (
//                 <p>No new orders</p>
//               ) : (
//                 <ul>
//                   {orders.map(order => (
//                     <li key={order.id} className="order-item">
//                       <span>Order from {order.customerName}</span>
//                       <button onClick={() => acceptOrder(order.id)}>Accept</button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//           </div>
//         )}
//       </div>
      
//         </ul>

       
//         <div className="navbar-menu">
//           <button className="menu-btn" onClick={toggleMenu}>☰</button> {/* Menu button */}
//           {isMenuOpen && (
//             <div className="menu-dropdown">
//               <ul>
//                 <li>Profile</li>
//                 <li>Settings</li>
//                 <li>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </nav>
      
//       <h1 className="title1">WELCOME</h1>
//       <h2 className="title">"Innovating healthcare, one prescription at a time."</h2>

//       <Link className="button-link" to="/managemedicine">
//     <button className="link-button">Manage Medicine</button>
//   </Link>


//     </div>
//   );
// }

// export default PharmacistPage;




import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './PharmacistPage.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome for icons

function PharmacistPage() {
// Sample data for orders
const sampleOrders = [
{ id: 1, customerName: 'John Doe', seen: false },
    { id: 2, customerName: 'Jane Smith', seen: true },
    { id: 3, customerName: 'Alice Brown', seen: false },
  ];

  const [orders, setOrders] = useState(sampleOrders); // Using sample orders as initial state
  const [unseenCount, setUnseenCount] = useState(sampleOrders.filter(order => !order.seen).length);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false); // State to toggle shop dropdown

  // Simulating fetchOrders with mock data
  useEffect(() => {
    // Update unseen count based on mock orders
    setUnseenCount(orders.filter(order => !order.seen).length);
  }, [orders]); // Recalculate unseenCount when orders change

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Mark order as seen and accept it
  const acceptOrder = (orderId) => {
    setOrders(prevOrders => {
      return prevOrders.map(order => {
        if (order.id === orderId) {
          return { ...order, seen: true }; // Mark order as seen
        }
        return order;
      });
    });
    setUnseenCount(prev => prev - 1); // Decrease unseen count
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  const toggleShopDropdown = () => setIsShopDropdownOpen(!isShopDropdownOpen); // Toggle shop dropdown

  return (
    <div className="pharmacist-page">
      <nav className="navbar">
      <div className="flex justify-center mb-4 text-3xl  text-blue-900 font-logo2 font-thin">
          MedMaster
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={toggleShopDropdown}>Shop</a>
            {isShopDropdownOpen && (
              <div className="shop-dropdown">
                <ul>
                  {/* Add shop items here */}
                </ul>
              </div>
            )}
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#" onClick={toggleShopDropdown}>Brands</a>
            {isShopDropdownOpen && (
              <div className="shop-dropdown">
                <ul>
                  {/* Add brand images here */}
                </ul>
              </div>
            )}
          </li>

<li className="nav-item">
 <Link className="nav-link" to="/about">About Us</Link> {/* Link to About Us page */}
</li>

<li className="nav-item">
<Link className="nav-link" to="/contact">Contact Us</Link> {/* Link to Contact Us page */}
</li>

<div className="notification-bell">
<button
            className={`bell-button ${unseenCount > 0 ? 'new-notification' : ''}`}
            onClick={toggleDropdown}
          >
            <i className="fa-solid fa-bell" style={{ color: '#000000' }}></i>
            {unseenCount > 0 && <span className="badge">{unseenCount}</span>}
          </button>
          {isDropdownOpen && (
            <div className="notifications-dropdown">
              {orders.length === 0 ? (
                <p>No new orders</p>
              ) : (
                <div className="notification-list">
                  {orders.map(order => (
                    <div
                      key={order.id}
                      className={`notification-item ${order.seen ? 'seen' : 'unseen'}`}
                    >
                      <div className="notification-info">
                        <i className={`fa-solid ${order.seen ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                        <span className="order-details">
                          {order.seen ? 'Accepted: ' : 'New Order from '} {order.customerName}
                        </span>
                      </div>
                      {!order.seen && (
                        <button
                          className="accept-button"
                          onClick={() => acceptOrder(order.id)}
                        >
                          Accept
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        </ul>

        <div className="navbar-menu">
          <button className="menu-btn" onClick={toggleMenu}>☰</button> {/* Menu button */}
          {isMenuOpen && (
            <div className="menu-dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </nav>

<h1 className="title1"></h1>
<h1 className="text-6xl font-bold text-blue-900">WELCOME</h1>
 <h2 className="title">"Innovating healthcare, one prescription at a time."</h2>

<Link className="button-link" to="/managemedicine">
<button className="link-button">Manage Medicine</button>
</Link>
</div>
  );
}

export default PharmacistPage;
