import * as React from "react";
import Grid from "@mui/material/Grid";
import brspdlogo from "../images/Branding/01 Logo/Logo/Full Color/Digital/Brightspeed_Logo_Full_Color_RGB_864px@72ppi.png";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

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

const Lead = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                Leads
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
