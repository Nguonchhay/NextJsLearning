import React, { Fragment } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import Header from '../shared/admins/Header';
import SideBar from '../shared/admins/SideBar';
import Footer from '../shared/admins/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/admin/main.scss';


const AdminTemplate = props => {
    return (
        <Fragment>
            <Header />
            <Container fluid={true}>
                <Row>
                    <Col sm="2">
                        <SideBar />
                    </Col>
                    <Col sm="10">
                        <div className="main">
                            {props.page}
                        </div>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
};

export default AdminTemplate;