import React from 'react';
import { Col, Row ,Button} from 'react-bootstrap';
import './dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Review from './review/Review';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Pay from './pay/Pay';
import useAuth from '../../hooks/useAuth';
import OrderMap from './My Order/OrderMap';
import AddProduct from './AddProduct/AddProduct';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageOrders from './ManageProducts/ManageOrders';
import Home from '../Home/Home/Home';

const Dashboard = () => {
    const { admin } = useAuth();
    const {logout } = useAuth();

    console.log(admin);
    return (
        <Router>
            <Row>
                <Col sm={12} md={2} className='border'>
                    <div className='sidebar'>
                    <Link to="/home">Home</Link>
                    <Link to='/dashboard/myorders'>My Orders</Link>
                    <Link to='/dashboard/review'>Reviews</Link>
                    <Link to='/dashboard/pay'>Pay</Link>

                {
                    admin && <>
                    <Link to='/dashboard/makeadmin'>Make Admin</Link>
                    <Link to='/dashboard/manageallorders'>Manage All Orders</Link>
                    <Link to='/dashboard/addaproduct'>Add A Product</Link>
                    <Link to='/dashboard/manageproducts'>Manage Product</Link>
                    </>
                }
                <Button className='bg-info rounded-2 border-0 p-2 ms-2 ' onClick= {logout} variant="success">Logout</Button>
                    </div>
                </Col >
                <Col sm={12} md={10} className='border'>
                    <div className='sidebar-content'>

                        <Switch>
                            <Route path='/home'>
                              <Home></Home>
                            </Route>
                            <Route exact path="/dashboard">
                                <Home></Home>
                            </Route>
                            <Route path="/dashboard/review">
                                <Review></Review>
                            </Route>
                            <Route path="/dashboard/makeadmin">
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path="/dashboard/myorders">
                                <OrderMap></OrderMap>
                            </Route>
                            <Route path="/dashboard/pay">
                                <Pay></Pay>
                            </Route>
                            <Route path="/dashboard/manageallorders">
                               <ManageAllOrders></ManageAllOrders>
                            </Route>
                            <Route path="/dashboard/manageproducts">
                               <ManageOrders></ManageOrders>
                            </Route>
                            <Route path="/dashboard/addaproduct">
                               <AddProduct></AddProduct>
                            </Route>
                        </Switch>

                    </div>
                </Col>
            </Row>
        </Router>
    );
};

export default Dashboard;