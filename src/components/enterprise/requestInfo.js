import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
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

const RequestInfo = () => {
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

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const onSubmit = () => {
    setIsSubmit(true);
  };

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setServicePlan(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="request-info container">
      <h3 className="req-info-title">Request Info</h3>
      <p className="req-info-subtitle">
        To get sales help from a Business Solutions specialist, please complete
        this form.
      </p>
      <Grid container spacing={2}>
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
            required
            fullWidth
            label="Email"
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
            fullWidth
            required
            label="Company/Organization Name"
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
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Zip/Postal Code"
            id="zip"
            value={zip}
            onChange={(event) => setZip(event.target.value)}
            error={zip === "" && isSubmit === true}
            helperText={
              zip === "" && isSubmit === true ? "This field is required!" : " "
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
          <FormControl
            sx={{ width: 640 }}
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
                  <Checkbox checked={servicePlan.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
            {servicePlan.length === 0 && isSubmit === true ? (
              <FormHelperText>This field is required!</FormHelperText>
            ) : (
              ""
            )}
          </FormControl>
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
          <FormControl
            sx={{ width: 640 }}
            error={internetService.length === 0 && isSubmit === true}
          >
            <InputLabel id="demo-multiple-name-label">
              Do you currently have internet service ? *
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
              <FormHelperText>This field is required!</FormHelperText>
            ) : (
              ""
            )}
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl
            sx={{ width: 640 }}
            error={contactAgent.length === 0 && isSubmit === true}
          >
            <InputLabel id="demo-multiple-name-label">
              How would you like our sales agent to contact you ? *
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              required
              input={
                <OutlinedInput label="How would you like our sales agent to contact you ? *" />
              }
              MenuProps={MenuProps}
              value={contactAgent}
              onChange={(event) => {
                setContactAgent(event.target.value);
              }}
            >
              {contactInfo.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
            {contactAgent.length === 0 && isSubmit === true ? (
              <FormHelperText>This field is required!</FormHelperText>
            ) : (
              ""
            )}
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            type="number"
            label="BAN"
            id="ban"
            value={ban}
            onChange={(event) => setBan(event.target.value)}
            error={ban === "" && isSubmit === true}
            helperText={
              ban === "" && isSubmit === true ? "This field is required!" : " "
            }
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Additional Information which may help us to provide you service"
            id="users"
            multiline
            rows={7}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="I affirm i have perused and precevied Brightspeed agreements"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} className="quote-button">
          <Button className="quote-button-quote" onClick={onSubmit}>
            Submit Info
          </Button>
        </Grid>
        <Grid item xs={12} className="quote-button">
          <p>
            We are commited to protect your
            <a
              className="privacy"
              href="https://www.zdnet.com/article/best-browser-for-privacy/"
              target="_blank"
            >
              privacy
            </a>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default RequestInfo;
