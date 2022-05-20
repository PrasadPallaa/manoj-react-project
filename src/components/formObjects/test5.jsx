import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const steps = [
  {
    label: "Entered Data",
    description: `Data`,
  },
];

export default function Test5Form({ dataParentToChild }) {
  return (
    <React.Fragment>
        <Card>
          <CardContent>
            {JSON.stringify(dataParentToChild)}
          </CardContent>
        </Card>
    </React.Fragment>
  );
}
