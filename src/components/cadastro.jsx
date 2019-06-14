import React, { Fragment } from "react";
import CustomerTable from "./customerTable";
import CustomizedTabs from "./customizedTabs";

const Cadastro = () => {
  return (
    <Fragment>
      <CustomizedTabs />
      <CustomerTable />
    </Fragment>
  );
};

export default Cadastro;
