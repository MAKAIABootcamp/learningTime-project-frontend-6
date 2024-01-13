import React from "react";

import Header from "../../components/Nav/Header";
import CrudDonations from "../../components/crudDonations/CrudDonations";
import CrudCourses from "../../components/crudCourses/CrudCourses";

function Admin() {
  return (
    <>
      <Header />
      <CrudDonations />
      <CrudCourses />
    </>
  );
}

export default Admin;
