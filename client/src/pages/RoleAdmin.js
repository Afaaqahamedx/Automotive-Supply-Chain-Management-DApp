import React from "react";
import ResponsiveDrawer from "../components/Navbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRole } from "../context/RoleDataContext";
import { useStyles } from "../components/Styles";

function RoleAdmin(props) {
  const accounts = props.accounts;
  const supplyChainContract = props.supplyChainContract;
  const { accs, roles, setRoles } = useRole();

  console.log("admin ", accs);

  const classes = useStyles();
  const [manufacturerRole, setManufacturerRole] = React.useState("");
  const [autoDealerRole, setAutoDealerRole] = React.useState("");
  const [logisticsCompanyRole, setlogisticsCompanyRole] = React.useState("");
  const [customerRole, setCustomerRole] = React.useState("");
  const navItem = [];

  const handleAddManufacturerRole = async () => {
    await setRoles({
      ...roles,
      manufacturer: manufacturerRole,
    });

    localStorage.setItem("mRole", manufacturerRole);
    await supplyChainContract.methods
      .addManufacturerRole(manufacturerRole)
      .send({ from: accounts[0], gas: 100000 })
      .then(console.log);

    setManufacturerRole("");
  };

  const handleAddAutoDealerRole = async () => {
    await setRoles({
      ...roles,
      autodealer: autoDealerRole,
    });

    localStorage.setItem("tpRole", autoDealerRole);
    await supplyChainContract.methods
      .addAutoDealerRole(autoDealerRole)
      .send({ from: accounts[0], gas: 100000 })
      .then(console.log);

    setAutoDealerRole("");
  };

  const handleAddlogisticsCompanyRole = async () => {
    await setRoles({
      ...roles,
      logisticscompany: logisticsCompanyRole,
    });

    localStorage.setItem("dhRole", logisticsCompanyRole);
    await supplyChainContract.methods
      .addlogisticsCompanyRole(logisticsCompanyRole)
      .send({ from: accounts[0], gas: 100000 })
      .then(console.log);

    setlogisticsCompanyRole("");
  };

  const handleAddCustomerRole = async () => {
    await setRoles({
      ...roles,
      customer: customerRole,
    });

    localStorage.setItem("cRole", customerRole);
    await supplyChainContract.methods
      .addCustomerRole(customerRole)
      .send({ from: accounts[0], gas: 100000 })
      .then(console.log);

    setCustomerRole("");
  };

  return (
    <div>
      <ResponsiveDrawer navItems={navItem}>
        <div className={classes.FormWrap}>
          <h1 className={classes.pageHeading}>Add Roles</h1>
          {/* {console.log(roles)} */}

          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="manufacturerRole"
                label="Enter Manufacturer Address"
                variant="outlined"
                value={manufacturerRole}
                onChange={(e) => setManufacturerRole(e.target.value)}
                style={{ width: "70%" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddManufacturerRole}
                style={{
                  width: "30%",
                  marginLeft: "10px",
                  borderRadius: "20px",
                }}
              >
                Add Manufacturer
              </Button>
            </div>
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="autoDealerRole"
                label="Enter Dealer Address "
                variant="outlined"
                value={autoDealerRole}
                onChange={(e) => setAutoDealerRole(e.target.value)}
                style={{ width: "70%" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddAutoDealerRole}
                style={{
                  width: "30%",
                  marginLeft: "10px",
                  borderRadius: "20px",
                }}
              >
                Add dealer address
              </Button>
            </div>
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="logisticsCompanyRole"
                label="Enter Logistics Address"
                variant="outlined"
                value={logisticsCompanyRole}
                onChange={(e) => setlogisticsCompanyRole(e.target.value)}
                style={{ width: "70%" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddlogisticsCompanyRole}
                style={{
                  width: "30%",
                  marginLeft: "10px",
                  borderRadius: "20px",
                }}
              >
                add Logistics Address
              </Button>
            </div>
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="customerRole"
                label=" Enter Customer Address"
                variant="outlined"
                value={customerRole}
                onChange={(e) => setCustomerRole(e.target.value)}
                style={{ width: "70%" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddCustomerRole}
                style={{
                  width: "30%",
                  marginLeft: "10px",
                  borderRadius: "20px",
                }}
              >
                add customer
              </Button>
            </div>
          </form>
        </div>
        {/* <div className={classes.FormWrap}>
        <h1 className={classes.pageHeading}>Local Accounts</h1>
        {accounts.slice(1).map((acc) => (
          <h3 className={classes.tableCount}>{acc}</h3>
        ))}
        
      </div> */}
      </ResponsiveDrawer>
    </div>
  );
}

export default RoleAdmin;
