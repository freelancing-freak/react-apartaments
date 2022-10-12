import React from "react";
import Layout from "../../components/Admin/Layout/Layout";
import ApartmentForm from "../../components/Admin/Apartment/Form";
import {Link} from "react-router-dom";

const AddApartmentPage = () => {
    return (
        <Layout>
            <>
                <Link to='/admin/apartments'>Powrót</Link>
                <h3>Dodawanie nowego apartamentu</h3>
                <br/>
                <ApartmentForm/>
            </>
        </Layout>
    );
};

export default AddApartmentPage;
