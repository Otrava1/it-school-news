import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";


export default function NewsCategory() {
 // Extrag parametrul category ID din URL
    const { categoryId } = useParams();
    return (

<>
        <Layout>
        <p>Categorii de stiri :{categoryId}</p>
        </Layout>
        </>
    )
}