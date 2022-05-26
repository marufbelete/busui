import React,{useRef} from 'react';
import { Card,Col ,Row,Button,Alert} from 'react-bootstrap';
import { NavLink ,Link, useHistory} from 'react-router-dom';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
import CircularProgress from "@material-ui/core/CircularProgress";
import Buttons from "@material-ui/core/Button";
import {loginActions} from "../../../store/login-slice";
import { loginUser } from '../../../store/authhttp';
import { useSelector,useDispatch } from "react-redux";
import { loadingActions } from '../../../store/loading-slice';
import { errorActions } from '../../../store/error-slice';
const Signin = () => {
    const emailref=useRef()
    const passwordref=useRef()
const history = useHistory()
const loginState = useSelector((state) => state.login);
const { isAuthenticated } = loginState;
const loadingStatus=useSelector(state=>state.loading.status)
const errmsg=useSelector(state=>state.message.errMessage)
console.log(errmsg)
const dispatch=useDispatch()
    const LoginHandler=(event)=>{
        event.preventDefault()
        history.push('/dashboard')     
    }
    // useEffect(()=>{
    //     isAuthenticated&&history.push('/dashboard')
    // },[isAuthenticated])
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <Card className="borderless text-center">
                        <Card.Body>
                            <h4 className="mb-4">Admin Dashboard</h4>

                            <div className="mb-4">
                                <i className="feather icon-unlock auth-icon" />
                            </div>
                            {errmsg && (
                            <Col sm={12} style={{marginBottom:'8px'}}>
                            <small className="text-danger form-text">{errmsg}</small>
                            </Col>
                        )} 
                     <form onSubmit={LoginHandler}>
                        <div className="form-group mb-3">
                            <input
                                className="form-control"
                                label="Email Address"
                                placeholder="Email Address"
                                name="email"
                                ref={emailref}
                                // onBlur={handleBlur}
                                // onChange={handleChange}
                                type="text"
                                // value={values.email}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <input
                                className="form-control"
                                label="Password"
                                placeholder="Password"
                                name="password"
                                ref={passwordref}
                                // onBlur={handleBlur}
                                // onChange={handleChange}
                                type="password"
                                // value={values.password}
                            />
                        </div>

                        <div className="custom-control custom-checkbox  text-left mb-4 mt-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Rember me.
                            </label>
                        </div>

                        <Row>
                            <Col mt={2}>
                                <Buttons
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                        {loadingStatus!=='pending'?"Sign In" :<CircularProgress color='secondary' size={18}/>}
                           </Buttons>
                            </Col>
                        </Row>
                    </form>
             
            <hr />

                            <p className="mb-0 text-muted">
                                Forgot password?{' '}
                                <NavLink to="/forgotpassword" className="f-w-400">
                                    Forgot
                                </NavLink>
                            </p>

                            <br />

                            <p className="mb-0 text-muted">
                                &copy;{' '}
                                <a target="_blank" rel="noreferrer">
                                    Shipping
                                </a>
                                -{' '}
                                <a  rel="noreferrer">
                                    Dashboard
                                </a>
                                .
                            </p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Signin;
