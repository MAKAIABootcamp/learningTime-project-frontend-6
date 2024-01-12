import React from "react";

import Header from "../../components/Nav/Header";
import CrudDonations from "../../components/crudDonations/CrudDonations";

function Admin() {
  return (
    <>
      <Header />
      <CrudDonations />
    </>
  );
}

export default Admin;
