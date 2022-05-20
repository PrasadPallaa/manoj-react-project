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
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const steps = [
  {
    label: "Hosted Voice",
    description: `Perform facility check on address.`,
  },
];

export default function Test2Form({ childToParent2 }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isPlanATrue, setPlanATrue] = React.useState(false);
  const [isPlanBTrue, setPlanBTrue] = React.useState(false);
  const [isPlanCTrue, setPlanCTrue] = React.useState(false);
  const [isPlanDTrue, setPlanDTrue] = React.useState(false);
  const [lName, setLastName] = React.useState("");
  const [fName, setFirstName] = React.useState("");

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isPlanATrue}
                        onChange={(e) => {
                          setPlanATrue(e.target.checked);
                        }}
                        value="Plan A"
                      />
                    }
                    label="Plan A"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isPlanBTrue}
                        onChange={(e) => {
                          setPlanBTrue(e.target.checked);
                        }}
                        value="Plan B"
                      />
                    }
                    label="Plan B"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isPlanCTrue}
                        onChange={(e) => {
                          setPlanCTrue(e.target.checked);
                        }}
                        value="Plan C"
                      />
                    }
                    label="Plan C"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isPlanDTrue}
                        onChange={(e) => {
                          setPlanDTrue(e.target.checked);
                        }}
                        value="Plan D"
                      />
                    }
                    label="Plan D"
                  />
                </FormGroup>
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
      isPlanATrue: isPlanATrue,
      isPlanBTrue: isPlanBTrue,
      isPlanCTrue: isPlanCTrue,
      isPlanDTrue: isPlanDTrue,
    };

    let arr = [form1Data];

    setData(arr);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    childToParent2(arr);
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
