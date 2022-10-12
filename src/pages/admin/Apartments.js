import React from "react";
import Layout from "../../components/Admin/Layout/Layout";
import {Link} from "react-router-dom";

const ApartmentsPage = () => {
    return (
        <Layout>
            <h3>Apartamenty</h3>
            <Link to='/admin/apartments/add'>Dodaj nowy apartament</Link>
        </Layout>
    );
};

export default ApartmentsPage;
