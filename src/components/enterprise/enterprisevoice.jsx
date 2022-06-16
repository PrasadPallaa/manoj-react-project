import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FacilityCheckForm from "../../components/formObjects/facilityCheck";
import QuoteForm from "../formObjects/quote";
import ProvisioningForm from "../formObjects/provisioning";
import DispatchForm from "../formObjects/dispatch";
import ActivationForm from "../formObjects/activation";
import checkoutFormModel from "../../components/formModel/checkoutFormModel";
import Alert from "@mui/material/Alert";
import * as enterprise from "../../components/constants/constants";
import Layout from "../../pages/Layout";

const steps = [
  {
    label: enterprise.FACILITY_CHECK,
    description: enterprise.FACILITY_CHECK_ADDRESS,
  },
  {
    label: enterprise.QUOTE,
    description: enterprise.SERVICE_ORDER,
  },
  {
    label: enterprise.PROVISIONING,
    description: enterprise.PROVISIONING_E2E,
  },
  {
    label: enterprise.DISPATCH,
    description: enterprise.DISPATCH_TECHNICIAN,
  },
  {
    label: enterprise.ACTIVATION,
    description: enterprise.DEVICE_ACTIVATION,
  },
];

const { formId, formField } = checkoutFormModel;

export default function Enterprisevoice() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [success, setSuccess] = React.useState(false);

  const [data1, setData1] = React.useState("");
  const [data2, setData2] = React.useState("");
  const [data3, setData3] = React.useState("");
  const [data4, setData4] = React.useState("");

  const childToParent1 = (childdata1) => {
    setData1(childdata1);
  };

  const childToParent2 = (childdata2) => {
    setData2(childdata2);
  };

  const childToParent3 = (childdata3) => {
    setData3(childdata3);
  };

  const childToParent4 = (childdata4) => {
    setData4(childdata4);
  };

  let arr = [...data1, ...data2, ...data3, ...data4];

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <FacilityCheckForm formField={formField} childToParent1={childToParent1} />
        );
      case 1:
        return (
          <QuoteForm formField={formField} childToParent2={childToParent2} />
        );
      case 2:
        return (
          <ProvisioningForm formField={formField} childToParent3={childToParent3} />
        );
      case 3:
        return (
          <DispatchForm formField={formField} childToParent4={childToParent4} />
        );
      case 4:
        return <ActivationForm formField={formField} dataParentToChild={arr} />;
      default:
        return <div>Not Found</div>;
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep == 4) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
      <Layout />
      {success && (
        <Alert
          onClose={() => {
            setSuccess(false);
          }}
        >
          Data Saved Successfully
        </Alert>
      )}
      <Stepper
        nonLinear
        activeStep={activeStep}
        orientation="horizontal"
        alternativeLabel
        className="parent-stepper"
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent className="parent-step-content">
              <Typography>{_renderStepContent(activeStep)}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
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

      {/* {activeStep === steps.length && (
        <div>

          <Card sx={{ minWidth: 275 }}>
      <CardContent>
          <pre>{JSON.stringify(data1)}</pre>
          <pre>{JSON.stringify(data2)}</pre>
          <pre>{JSON.stringify(data3)}</pre>
          <pre>{JSON.stringify(data4)}</pre>
          <pre>{JSON.stringify(data5)}</pre>
      </CardContent>
    </Card>
        </div>
      )} */}
    </React.Fragment>
  );
}
