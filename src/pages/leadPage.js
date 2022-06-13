import Grid from "@mui/material/Grid";
import brspdlogo from "../images/Branding/01 Logo/Logo/Full Color/Digital/Brightspeed_Logo_Full_Color_RGB_864px@72ppi.png";
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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import ListItemText from "@mui/material/ListItemText";

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

const contactInfo = ["Email", "Phone"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
//   }

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
  name,
  calories,
  fat,
  carbs,
  protein,
  leadStatus,
  leadOwner
) {
  return { name, calories, fat, carbs, protein, leadStatus, leadOwner };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 24, 4.0),
  createData("Eclair", 262, 16.0, 24, 6.0, 24, 4.0),
  createData("Cupcake", 305, 3.7, 67, 4.3, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 24, 4.0),
];

const Lead = () => {
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState(false);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [servicePlan, setServicePlan] = useState([]);
  const [noOfUsers, setNoOfUser] = useState("");
  const [internetService, setInternetService] = useState([]);
  const [contactAgent, setContactAgent] = useState([]);
  const [ban, setBan] = useState("");
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [isNewClicked, setIsNewClicked] = React.useState(false);
  const [hideLeadtabelData, setHideLeadTableData] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const onSubmit = () => {
    setIsSubmit(true);
  };

  const onClickNew = () => {
    setIsNewClicked(true);
    setHideLeadTableData(true);
  };

  const onClickCancel = () => {
    setIsNewClicked(false);
    setHideLeadTableData(false);
  };

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setServicePlan(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <img src={brspdlogo} alt="logo" className="img-brightspeed-login" />
        </Grid>
        <Grid item xs={5}>
          <h1 className="sales-porttal-heading">Sales Order Portal</h1>
        </Grid>
        <Grid item xs={2}>
          <h5 className="loggedin-user">Chaithanya Nimmala</h5>
        </Grid>
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
                        <TextField
                          label="View"
                          id="leads"
                          placeholder="My Leads"
                        />
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
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Company</TableCell>
                                <TableCell align="right">Product</TableCell>
                                <TableCell align="right">Email Id</TableCell>
                                <TableCell align="right">Lead Status</TableCell>
                                <TableCell align="right">Lead Owner</TableCell>
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
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.calories}
                                  </TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                  <TableCell align="right">
                                    {row.carbs}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.protein}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.leadStatus}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.leadOwner}
                                  </TableCell>
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
                      <TextField
                        required
                        fullWidth
                        label="Lead Id"
                        id="leadId"
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
                      <TextField
                        required
                        fullWidth
                        label="Lead Owner"
                        id="leadOwner"
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
                      <TextField
                        required
                        fullWidth
                        label="Lead Status"
                        id="leadStatus"
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
                        sx={{ width: 895 }}
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
                        sx={{ width: 895 }}
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
                      <TextField
                        required
                        fullWidth
                        label="Call Status"
                        id="callStatus"
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
    </React.Fragment>
  );
};
export default Lead;
