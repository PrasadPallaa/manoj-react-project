import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";

const Quote = () => {
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

  const quotesData = ["My Leads", "All Leads"];

  const quoteStatusData = [
    "New",
    "Review Pending",
    "User Confirmation Pending",
    "Approved", 
    "Closed"
  ];

  const quoteAgentNameData = ["John", "David", "Tracy"];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  function createQuoteData(
    quoteId,
    customerName,
    legalEntityName,
    product,
    email,
    quoteStatus,
    agentName
  ) {
    return {
      quoteId,
      customerName,
      legalEntityName,
      product,
      email,
      quoteStatus,
      agentName,
    };
  }

  const quoteRowTableData = [
    createQuoteData(
      "ManojKumar234",
      "Chaithanya Nimmala",
      "Tech M",
      "Business Cloud Computing",
      "chaithanya@techm.com",
      "New",
      "John"
    ),
    createQuoteData(
      "ManojKumar234",
      "Chaithanya Nimmala",
      "IBM",
      "SIP Trunk",
      "chaithanya@techm.com",
      "New",
      "John"
    ),
    createQuoteData(
      "ManojKumar234",
      "Chaithanya Nimmala",
      "JP Morgan",
      "Business Lines",
      "chaithanya@techm.com",
      "New",
      "John"
    ),
  ];

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [email, setEmail] = useState("");
  const [myQuotes, setMyQuotes] = useState(["My Leads"]);
  const [isQuoteEditClicked, setIsQuoteEditClicked] = React.useState(false);
  const [isQuoteIdClicked, setIsQuoteIdClicked] = React.useState(false);
  const [hideQuotetabelData, setHideQuotetabelData] = React.useState(false);
  const [quoteId, setQuoteId] = useState("");
  const [agentName, setAgentName] = useState([]);
  const [quoteEmailId, setQuoteEmailId] = useState("");
  const [quoteFirstName, setQuoteFirstName] = useState("");
  const [quoteLastName, setQuoteLastName] = useState("");
  const [quotePhoneNumber, setQuotePhoneNumber] = useState("");
  const [quoteStateValue, setQuoteStateValue] = useState("");
  const [quoteZip, setQuoteZip] = useState("");
  const [quoteFullName, setQuoteFullName] = useState("");
  const [quoteServicePlan, setQuoteServicePlan] = useState("");
  const [quoteTotalAmount, setQuoteTotalAmount] = useState("");
  const [quoteStatus, setQuoteStatus] = useState(["New"]);
  const [isQuoteDataSubmit, setIsQuoteDataSubmit] = React.useState(false);


  const useStyles = makeStyles({
    leadIdTable: {
      borderBottom: "1px solid gray",
      cursor: "pointer",
    },
    quoteEmailId: {
      marginTop: "0.5rem !important",
    },
    searchButton: {
      borderRadius: "12px !important",
      width: "110px !important",
      color: "black !important",
      textTransform: "none !important",
      marginLeft: "5px !important",
      border: "1px solid gray !important",
      height: "3.2rem !important",
    },
  });

  const classes = useStyles();

  const onQuoteIdClick = (row) => {
    setHideQuotetabelData(true);
    setIsQuoteDataSubmit(true);
    setIsQuoteIdClicked(true);
    setQuoteId(row.quoteId);
    setAgentName(row.agentName);
    setQuoteEmailId(row.email);
    setQuoteFirstName(row.customerName.split(" ")[0]);
    setQuoteLastName(row.customerName.split(" ")[1]);
    setQuotePhoneNumber("(555) 555-1234");
    setQuoteStateValue("New York ");
    setQuoteZip("12401");
    setQuoteFullName(row.customerName);
    setQuoteServicePlan(row.product ? row.product.split(",") : "");
    setQuoteTotalAmount("500");
  };

  const onQuoteDataSubmit = () => {
    if (!quoteStatus || !quotePhoneNumber || !agentName || !quoteTotalAmount) {
      setIsQuoteDataSubmit(true);
      return;
    }

    setIsQuoteDataSubmit(true);
    setIsQuoteEditClicked(false);
  };

  const onClickQuoteCancel = () => {
    setHideQuotetabelData(false);
    setIsQuoteDataSubmit(false);
    setQuoteId("");
    setAgentName("");
    setQuoteEmailId("");
    setQuoteFirstName("");
    setQuoteLastName("");
    setQuotePhoneNumber("");
    setQuoteStateValue("");
    setQuoteZip("");
    setQuoteFullName("");
    setQuoteServicePlan("");
    setQuoteTotalAmount("");
  };

  const quoteEditClicked = () => {
    setIsQuoteEditClicked(true);
  };
  return (
    <>
      {!hideQuotetabelData && (
        <>
          <Grid container spacing={2}>
            <Grid item>
              <FormControl
                sx={{ width: 350 }}
                error={myQuotes.length === 0 && isQuoteDataSubmit === true}
              >
                <InputLabel id="demo-multiple-name-label">View</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  input={<OutlinedInput label="View" />}
                  MenuProps={MenuProps}
                  value={myQuotes}
                  onChange={(event) => {
                    setMyQuotes(event.target.value);
                  }}
                >
                  {quotesData.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
                {myQuotes.length === 0 && isQuoteDataSubmit === true ? (
                  <FormHelperText>This field is required!</FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
            </Grid>

            <Button className="go-button"> Go</Button>
          </Grid>
          <Grid container spacing={2} className={classes.quoteEmailId}>
            <Grid item>
              <TextField
                sx={{ width: 550 }}
                inputProps={{ className: classes.input }}
                required
                fullWidth
                label="Customer Email Id"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Button className={classes.searchButton}> Search</Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="sales-order-table">
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Quote Id</TableCell>
                      <TableCell>Customer Name</TableCell>
                      <TableCell>Legal entity Name</TableCell>
                      <TableCell>Product</TableCell>
                      <TableCell>Customer Email Id</TableCell>
                      <TableCell>Quote Status</TableCell>
                      <TableCell>Agent Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {quoteRowTableData.map((row) => (
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
                          onClick={() => onQuoteIdClick(row)}
                        >
                          <a className={classes.leadIdTable}> {row.quoteId}</a>
                        </TableCell>
                        <TableCell>{row.customerName}</TableCell>
                        <TableCell>{row.legalEntityName}</TableCell>
                        <TableCell>{row.product}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.quoteStatus}</TableCell>
                        <TableCell>{row.agentName}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </>
      )}

      {isQuoteIdClicked && isQuoteDataSubmit && (
        <Grid container spacing={2} className="sales-order-form-entered-data">
          <Grid item xs={12} className="quote-button">
            {isQuoteEditClicked === true ? (
              <>
                <Button
                  className="sales-order-button-save-cancel"
                  onClick={onQuoteDataSubmit}
                >
                  Save
                </Button>
                <Button
                  className="sales-order-button-save-cancel"
                  onClick={onClickQuoteCancel}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                className="sales-order-button-save-edit"
                onClick={quoteEditClicked}
              >
                Edit
              </Button>
            )}
          </Grid>
          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                <label>Quote ID*: </label>
              </div>
              <div className="col-6">
                <p>{quoteId}</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                <label>Agent Name*:</label>
              </div>
              <div className="col-6">
                {isQuoteEditClicked === true ? (
                  <FormControl
                    sx={{ width: "100%" }}
                    error={agentName.length === 0 && isQuoteDataSubmit === true}
                  >
                    <InputLabel id="demo-multiple-name-label">
                      Agent Name
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      input={<OutlinedInput label="Lead Status" />}
                      MenuProps={MenuProps}
                      value={agentName}
                      onChange={(event) => {
                        setAgentName(event.target.value);
                      }}
                    >
                      {quoteAgentNameData.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    {agentName.length === 0 && isQuoteDataSubmit === true ? (
                      <FormHelperText>This field is required!</FormHelperText>
                    ) : (
                      ""
                    )}
                  </FormControl>
                ) : (
                  <p>{agentName}</p>
                )}
              </div>
            </div>
          </Grid>

          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                <label>Quote Status*:</label>
              </div>
              <div className="col-6">
                {isQuoteEditClicked ? (
                  <FormControl
                    sx={{ width: "100%" }}
                    error={
                      quoteStatus.length === 0 && isQuoteDataSubmit === true
                    }
                  >
                    <InputLabel id="demo-multiple-name-label">
                      Quote Status
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      input={<OutlinedInput label="Lead Status" />}
                      MenuProps={MenuProps}
                      value={quoteStatus}
                      onChange={(event) => {
                        setQuoteStatus(event.target.value);
                      }}
                    >
                      {quoteStatusData.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    {quoteStatus.length === 0 && isQuoteDataSubmit === true ? (
                      <FormHelperText>This field is required!</FormHelperText>
                    ) : (
                      ""
                    )}
                  </FormControl>
                ) : (
                  <p>{quoteStatus}</p>
                )}
              </div>
            </div>
          </Grid>

          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                <label>Service Plan*:</label>
              </div>
              <div className="col-6">
                <p>{quoteServicePlan}</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                <label>Email Id*:</label>
              </div>
              <div className="col-6">
                <p>{quoteEmailId}</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                <label>Total Amount$*:</label>
              </div>
              <div className="col-6">
                {isQuoteEditClicked === true ? (
                  <TextField
                    required
                    fullWidth
                    label="Amount"
                    id="Amount"
                    value={quoteTotalAmount}
                    onChange={(event) =>
                      setQuoteTotalAmount(event.target.value)
                    }
                    error={
                      quoteTotalAmount === "" && isQuoteDataSubmit === true
                    }
                    helperText={
                      quoteTotalAmount === "" && isQuoteDataSubmit === true
                        ? "This field is required!"
                        : " "
                    }
                  />
                ) : (
                  <p>{quoteTotalAmount}</p>
                )}
              </div>
            </div>
          </Grid>

          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                <label>First Name*:</label>
              </div>
              <div className="col-6">
                <p>{quoteFirstName}</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className="row">
              <div className="col-6 label-alignment">
                <label>Modified at:</label>
              </div>
              <div className="col-6">
                <p>2 June 2022 11:00:00 AM</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                <label>Last Name*:</label>
              </div>
              <div className="col-6">
                <p>{quoteLastName}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                {" "}
                <label>Modified by:</label>
              </div>
              <div className="col-6">
                {" "}
                <p>{quoteFullName}</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                {" "}
                <label>Phone*:</label>
              </div>
              <div className="col-6">
                {isQuoteEditClicked === true ? (
                  <TextField
                    required
                    fullWidth
                    label="Phone"
                    id="phoneNumber"
                    value={quotePhoneNumber}
                    onChange={(event) =>
                      setQuotePhoneNumber(event.target.value)
                    }
                    error={
                      quotePhoneNumber === "" && isQuoteDataSubmit === true
                    }
                    helperText={
                      quotePhoneNumber === "" && isQuoteDataSubmit === true
                        ? "This field is required!"
                        : " "
                    }
                  />
                ) : (
                  <p>{quotePhoneNumber}</p>
                )}
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="sales-order-form-data"></Grid>

          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                {" "}
                <label>State *:</label>
              </div>
              <div className="col-6">
                {" "}
                <p>{quoteStateValue}</p>
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
                <p>{quoteZip}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="sales-order-form-data"></Grid>

          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                {" "}
                <label>Created at:</label>
              </div>
              <div className="col-6">
                {" "}
                <p>2 June 2022 11:00:00 AM</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="sales-order-form-data"></Grid>

          <Grid item xs={6} className="sales-order-form-data">
            <div className="row">
              <div className="col-6 label-alignment">
                {" "}
                <label>Created by:</label>
              </div>
              <div className="col-6">
                {" "}
                <p>{quoteFullName}</p>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Quote;
