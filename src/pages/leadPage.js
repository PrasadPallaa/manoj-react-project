import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "./Layout";
import Footer from "../pages/footer";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Business Cloud Computing", "SIP Trunk", "Business Lines"];

const servicePlanData = ["Yes", "No"];

const leadsData = ["My Leads", "All Leads"];

const leadStatusData = [
  "New",
  "Assigned to Agent",
  "Rejected/Cancelled",
  "Qualify Complete",
];

const callStatusData = [
  "Open",
  "Call Back Later",
  "Invalid Number",
  "No Answer",
  "Call Completed",
  "Not Interested",
];

const leadOwnerData = ["John", "David", "Tracy"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function createData(
  leadId,
  customerName,
  legalEntityName,
  product,
  email,
  leadStatus,
  leadOwner
) {
  return {
    leadId,
    customerName,
    legalEntityName,
    product,
    email,
    leadStatus,
    leadOwner,
  };
}

const rows = [
  createData(
    "ManojKumar234",
    "Chaithanya Nimmala",
    "Tech M",
    "Business Cloud Computing",
    "chaithanya@techm.com",
    "New",
    "John"
  ),
  createData(
    "ManojKumar234",
    "Chaithanya Nimmala",
    "IBM",
    "SIP Trunk",
    "chaithanya@techm.com",
    "New",
    "John"
  ),
  createData(
    "ManojKumar234",
    "Chaithanya Nimmala",
    "JP Morgan",
    "Business Lines",
    "chaithanya@techm.com",
    "New",
    "John"
  ),
];

const Lead = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [firstName, setFirstName] = useState("");
  const [leadId, setLeadId] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comments, setComments] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [servicePlan, setServicePlan] = useState([]);
  const [noOfUsers, setNoOfUser] = useState("");
  const [internetService, setInternetService] = useState([]);
  const [myLeads, setMyLeads] = useState(["My Leads"]);
  const [leadStatus, setLeadStatus] = useState(["New"]);
  const [leadOwner, setLeadOwner] = useState([]);
  const [callStatus, setCallStatus] = useState([]);
  const [contactAgent, setContactAgent] = useState([]);
  const [ban, setBan] = useState("");
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [isNewClicked, setIsNewClicked] = React.useState(false);
  const [isEditClicked, setIsEditClicked] = React.useState(false);
  const [hideLeadtabelData, setHideLeadTableData] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles({
    input: {
      color: "red",
    },
  });

  const onSubmit = () => {
    setLeadId("manojsde2343");
    if (
      !email ||
      !firstName ||
      !lastName ||
      !address ||
      !stateValue ||
      !zip ||
      !phoneNumber ||
      !companyName ||
      !servicePlan.length ||
      !noOfUsers ||
      !internetService.length ||
      !leadStatus ||
      !leadOwner.length ||
      !callStatus.length ||
      !ban
    ) {
      setIsSubmit(true);
      return;
    }
    setIsSubmit(true);
    setIsEditClicked(true);
    setIsNewClicked(false);
  };

  const onLeadIdClick = (row) => {
    setHideLeadTableData(true);
    setIsNewClicked(true);
    setIsEditClicked(false);
    setBan("123456");
    setLeadId(row.leadId);
    setFirstName(row.customerName.split(" ")[0]);
    setLastName(row.customerName.split(" ")[1]);
    setEmail(row.email);
    setLeadOwner(row.leadOwner);
    setLeadStatus(row.leadStatus);
    setServicePlan(row.product ? row.product.split(",") : "");
    setPhoneNumber("(555) 555-1234");
    setCompanyName(row.legalEntityName);
    setAddress("Mr John Smith. 132, My Street, Kingston");
    setStateValue("New York ");
    setZip("12401");
    setNoOfUser("255");
    setInternetService("Yes");
    setComments("Comments");
    setCallStatus("Open");
    console.log("Clicked", row);
  };

  const onClickNew = () => {
    setIsNewClicked(true);
    setHideLeadTableData(true);
    setLeadId("ManojKumar234");
  };

  const editClicked = () => {
    setIsNewClicked(true);
    setIsEditClicked(false);
  };

  const onClickCancel = () => {
    setIsNewClicked(false);
    setHideLeadTableData(false);
    setIsSubmit(false);
    setAddress("");
    setBan("");
    setCallStatus([]);
    setComments("");
    setCompanyName("");
    setEmail("");
    setFirstName("");
    setInternetService([]);
    setLastName("");
    setLeadId("");
    setLeadOwner([]);
    setPhoneNumber("");
    setStateValue("");
    setZip("");
    setNoOfUser("");
    setServicePlan([]);
  };

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setServicePlan(typeof value === "string" ? value.split(",") : value);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Layout />
      <Grid container spacing={2}>
        <Grid item xs={5}></Grid>
        <Grid item xs={4}>
          <h1 className="sales-porttal-heading">Sales Order Portal</h1>
        </Grid>
        <Grid item xs={3} className="logged-in-user-settings"></Grid>
      </Grid>

      <div className="tab-panle-sales-portal">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Leads" {...a11yProps(0)} />
                  <Tab label="Quote" {...a11yProps(1)} />
                  <Tab label="Contract" {...a11yProps(2)} />
                  <Tab label="Order" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                {!hideLeadtabelData && (
                  <>
                    <Grid container spacing={2}>
                      <Grid item>
                        <FormControl
                          sx={{ width: 350 }}
                          error={myLeads.length === 0 && isSubmit === true}
                        >
                          <InputLabel id="demo-multiple-name-label">
                            View
                          </InputLabel>
                          <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            input={<OutlinedInput label="View" />}
                            MenuProps={MenuProps}
                            value={myLeads}
                            onChange={(event) => {
                              setMyLeads(event.target.value);
                            }}
                          >
                            {leadsData.map((name) => (
                              <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                              >
                                {name}
                              </MenuItem>
                            ))}
                          </Select>
                          {myLeads.length === 0 && isSubmit === true ? (
                            <FormHelperText>
                              This field is required!
                            </FormHelperText>
                          ) : (
                            ""
                          )}
                        </FormControl>
                      </Grid>
                      <Button className="go-button"> Go</Button>
                      <div className="new-button-container">
                        <Button className="new-button" onClick={onClickNew}>
                          New
                        </Button>
                      </div>
                    </Grid>
                    <Grid container spacing={2} className="sales-order-table">
                      <Grid item xs={12}>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 650 }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Lead Id</TableCell>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>Legal entity Name</TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Customer Email Id</TableCell>
                                <TableCell>Lead Status</TableCell>
                                <TableCell>Lead Owner</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row) => (
                                <TableRow
                                  key={row.name}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    onClick={() => onLeadIdClick(row)}
                                  >
                                    {row.leadId}
                                  </TableCell>
                                  <TableCell>{row.customerName}</TableCell>
                                  <TableCell>{row.legalEntityName}</TableCell>
                                  <TableCell>{row.product}</TableCell>
                                  <TableCell>{row.email}</TableCell>
                                  <TableCell>{row.leadStatus}</TableCell>
                                  <TableCell>{row.leadOwner}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                    </Grid>
                  </>
                )}

                {isNewClicked && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} className="quote-button">
                      <Button
                        className="sales-order-button-save-cancel"
                        onClick={onSubmit}
                      >
                        Save
                      </Button>
                      <Button
                        className="sales-order-button-save-cancel"
                        onClick={onClickCancel}
                      >
                        Cancel
                      </Button>
                    </Grid>

                    <Grid item xs={6}>
                      <label>Lead Id*: {leadId}</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormControl
                        sx={{ width: "100%" }}
                        error={leadOwner.length === 0 && isSubmit === true}
                      >
                        <InputLabel id="demo-multiple-name-label">
                          Lead Owner
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          input={<OutlinedInput label="Lead Status" />}
                          MenuProps={MenuProps}
                          value={leadOwner}
                          onChange={(event) => {
                            setLeadOwner(event.target.value);
                          }}
                        >
                          {leadOwnerData.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                        {leadOwner.length === 0 && isSubmit === true ? (
                          <FormHelperText>
                            This field is required!
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                      <FormControl
                        sx={{ width: "100%" }}
                        error={leadStatus.length === 0 && isSubmit === true}
                      >
                        <InputLabel id="demo-multiple-name-label">
                          Lead Status
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          input={<OutlinedInput label="Lead Status" />}
                          MenuProps={MenuProps}
                          value={leadStatus}
                          onChange={(event) => {
                            setLeadStatus(event.target.value);
                          }}
                        >
                          {leadStatusData.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                        {leadStatus.length === 0 && isSubmit === true ? (
                          <FormHelperText>
                            This field is required!
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                      <FormControl
                        sx={{ width: "100%" }}
                        error={servicePlan.length === 0 && isSubmit === true}
                      >
                        <InputLabel id="demo-multiple-checkbox-label">
                          Service Plan
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={servicePlan}
                          onChange={handleChange1}
                          input={<OutlinedInput label="Service Plan" />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                          placeholder="....."
                        >
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox
                                checked={servicePlan.indexOf(name) > -1}
                              />
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                        {servicePlan.length === 0 && isSubmit === true ? (
                          <FormHelperText>
                            This field is required!
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        inputProps={{ className: classes.input }}
                        required
                        fullWidth
                        label="Email Id"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        error={email === "" && isSubmit === true}
                        helperText={
                          email === "" && isSubmit === true
                            ? "This field is required!"
                            : " "
                        }
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        label="Number of users"
                        id="users"
                        value={noOfUsers}
                        onChange={(event) => setNoOfUser(event.target.value)}
                        error={noOfUsers === "" && isSubmit === true}
                        helperText={
                          noOfUsers === "" && isSubmit === true
                            ? "This field is required!"
                            : " "
                        }
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        label="First Name"
                        id="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        error={firstName === "" && isSubmit === true}
                        helperText={
                          firstName === "" && isSubmit === true
                            ? "This field is required!"
                            : " "
                        }
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <FormControl
                        sx={{ width: "100%" }}
                        error={
                          internetService.length === 0 && isSubmit === true
                        }
                      >
                        <InputLabel id="demo-multiple-name-label">
                          Do you currently have brightspeed internet service ? *
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          required
                          input={
                            <OutlinedInput label="Do you currently have internet service ? *" />
                          }
                          MenuProps={MenuProps}
                          value={internetService}
                          onChange={(event) => {
                            setInternetService(event.target.value);
                          }}
                        >
                          {servicePlanData.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                        {internetService.length === 0 && isSubmit === true ? (
                          <FormHelperText>
                            This field is required!
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        label="Last Name"
                        id="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        error={lastName === "" && isSubmit === true}
                        helperText={
                          lastName === "" && isSubmit === true
                            ? "This field is required!"
                            : " "
                        }
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        type="number"
                        label="Billing account number (BAN)"
                        id="ban"
                        value={ban}
                        onChange={(event) => setBan(event.target.value)}
                        error={ban === "" && isSubmit === true}
                        helperText={
                          ban === "" && isSubmit === true
                            ? "This field is required!"
                            : " "
                        }
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        label="Phone Number"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        error={phoneNumber === "" && isSubmit === true}
                        helperText={
                          phoneNumber === "" && isSubmit === true
                            ? "This field is required!"
                            : " "
                        }
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Comments"
                        id="users"
                        multiline
                        rows={2}
                        variant="outlined"
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        required
                        label="Company"
                        id="companyName"
                        value={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                        error={companyName === "" && isSubmit === true}
                        helperText={
                          companyName === "" && isSubmit === true
                            ? "This field is required!"
                            : " "
                        }
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <FormControl
                        sx={{ width: "100%" }}
                        error={callStatus.length === 0 && isSubmit === true}
                      >
                        <InputLabel id="demo-multiple-name-label">
                          Call Status
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          input={<OutlinedInput label="Call Status" />}
                          MenuProps={MenuProps}
                          value={callStatus}
                          onChange={(event) => {
                            setCallStatus(event.target.value);
                          }}
                        >
                          {callStatusData.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                        {callStatus.length === 0 && isSubmit === true ? (
                          <FormHelperText>
                            This field is required!
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        label="Address"
                        id="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        error={address === "" && isSubmit === true}
                        helperText={
                          address === "" && isSubmit === true
                            ? "This field is required!"
                            : " "
                        }
                      />
                    </Grid>

                    <Grid item xs={6}></Grid>

                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        label="State"
                        id="state"
                        value={stateValue}
                        onChange={(event) => setStateValue(event.target.value)}
                        error={stateValue === "" && isSubmit === true}
                        helperText={
                          stateValue === "" && isSubmit === true
                            ? "This field is required!"
                            : " "
                        }
                      />
                    </Grid>

                    <Grid item xs={6}></Grid>

                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        label="Zip Code"
                        id="zip"
                        value={zip}
                        onChange={(event) => setZip(event.target.value)}
                        error={zip === "" && isSubmit === true}
                        helperText={
                          zip === "" && isSubmit === true
                            ? "This field is required!"
                            : " "
                        }
                      />
                    </Grid>
                  </Grid>
                )}

                {isEditClicked && isSubmit && (
                  <Grid
                    container
                    spacing={2}
                    className="sales-order-form-entered-data"
                  >
                    <Grid item xs={12} className="quote-button">
                      <Button
                        className="sales-order-button-save-edit"
                        onClick={editClicked}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          <label>Lead Id*: </label>
                        </div>
                        <div className="col-6">
                          <p>{leadId}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          <label>Lead Owner*:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{leadOwner}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          <label>Lead Status*:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{leadStatus}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>Service Plan*:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{servicePlan}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>Email Id*:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{email}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>Number of users*:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{noOfUsers}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>First Name*:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{firstName}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>
                            Do you currently have <br /> brightspeed internet
                            service ? *:
                          </label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p className="mt-4">{internetService}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>Last Name*:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{lastName}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>
                            Billing account <br /> number (BAN)*:
                          </label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p className="mt-4">{ban}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>Phone Number*:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{phoneNumber}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>Comments:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{comments}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>Company *:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{companyName}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>Call Status *:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{callStatus}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>Address *:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{address}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6}></Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>State *:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{stateValue}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={6} className="sales-order-form-data"></Grid>

                    <Grid item xs={6} className="sales-order-form-data">
                      <div className="row">
                        <div className="col-6 label-alignment">
                          {" "}
                          <label>Zip Code *:</label>
                        </div>
                        <div className="col-6">
                          {" "}
                          <p>{zip}</p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                )}
              </TabPanel>
              <TabPanel value={value} index={1}>
                Quote
              </TabPanel>
              <TabPanel value={value} index={2}>
                Contract
              </TabPanel>
              <TabPanel value={value} index={3}>
                Order
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className="sales-order-portal">
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Lead;
