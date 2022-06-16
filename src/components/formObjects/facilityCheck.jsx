import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const steps = [
  {
    label: "",
    description: `Perform facility check on address.`,
  },
];

export default function FacilityCheckForm({ childToParent1 }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [lName, setLastName] = React.useState("");
  const [fName, setFirstName] = React.useState("");
  const [address, setAddress] = React.useState("");

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  value={fName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  value={lName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Business Street Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    inputProps={{ "aria-label": "business street address" }}
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
          </React.Fragment>
        );

      default:
        return <div>Not Found</div>;
    }
  }

  const [data, setData] = React.useState([]);

  const handleNext = () => {
    const form1Data = {
      fName: fName,
      lName: lName,
      address: address,
    };

    let arr = [form1Data];

    setData(arr);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    childToParent1(arr);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
      <Stepper
        nonLinear
        activeStep={activeStep}
        orientation="horizontal"
        alternativeLabel
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{_renderStepContent(activeStep)}</Typography>
              <Box sx={{ mb: 2 }}>
                <div className="inner-buttons">
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Finish
                    {/* {index === steps.length - 1 ? "Finish" : "Next"} */}
                  </Button>
                  {/* <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button> */}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </React.Fragment>
  );
}
