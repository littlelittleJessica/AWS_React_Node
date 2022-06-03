import Layout from "../../components/Layout";
import React from "react";
import withAdmin from "../withAdmin";
import Link from 'next/link'


const Admin = ({user}) => <Layout>
  <h1>Admin Dashboard</h1>
  <br/>
  <div className="row">
    <div className="col-md-4">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="/admin/category/create" className="nav-link">
            Create category
          </a>
        </li>
        <li className="nav-item">
          <Link href="/admin/category/read">
            <a className="nav-link">All categories</a>
          </Link>
        </li>
      </ul>
    </div>
    <div className="col-md-8">

    </div>
  </div>
</Layout>;

export default withAdmin(Admin);