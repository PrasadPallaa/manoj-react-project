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

const steps = [
  {
    label: "Test 1",
    description: `Perform facility check on address.`,
  },
  {
    label: "Test 2",
    description: "Create a Service Order.",
  },
];

export default function Test4Form({ childToParent4 }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [lName, setLastName] = React.useState("");
  const [fName, setFirstName] = React.useState("");
  const [product, setProduct] = React.useState("");
  const [description, setDescription] = React.useState("");

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Sample Form 7
            </Typography>

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
            </Grid>
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Sample Form 8
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="product"
                  name="product"
                  label="Product"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="description"
                  name="description"
                  label="Description"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
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
    };

    const form2Data = {
      product: product,
      description: description,
    };

    let arr = [form1Data, form2Data];

    setData(arr);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    childToParent4(arr);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
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
