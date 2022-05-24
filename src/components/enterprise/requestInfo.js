import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ReCAPTCHA from "react-google-recaptcha";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];

const options = ["Service 1", "Service 2", "Service 3"];
const options1 = ["Yes", "No"];
const options2 = ["Email", "Phone"];

const RequestInfo = () => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [value1, setValue1] = React.useState(options1[0]);
  const [inputValue1, setInputValue1] = React.useState("");

  const [value2, setValue2] = React.useState(options2[0]);
  const [inputValue2, setInputValue2] = React.useState("");

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function onChange(value) {
    console.log('Captcha value:', value);
  }

  return (
    <div className="request-info container">
      <h3 className="req-info-title">Request Info</h3>
      <p className="req-info-subtitle">
        To get sales help from a Business Solutions specialist, please complete
        this form.
      </p>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="First name" id="firstName" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Last name" id="lastName" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Address" id="address" />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            fullWidth
            renderInput={(params) => <TextField {...params} label="State" />}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Zip/Postal Code" id="zip" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Email" id="email" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Phone Number" id="phoneNumber" />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Company/Organization Name"
            id="companyName"
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="Service Plan" />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Number of users" id="users" />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            value={value1}
            onChange={(event, newValue) => {
              setValue1(newValue);
            }}
            inputValue={inputValue1}
            onInputChange={(event, newInputValue) => {
              setInputValue1(newInputValue);
            }}
            id="controllable-states-demo-1"
            options={options1}
            fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
                label="Do you currently have internet service ?"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          {!checked ? (
            <Autocomplete
              value={value2}
              onChange={(event, newValue) => {
                setValue2(newValue);
              }}
              inputValue={inputValue2}
              onInputChange={(event, newInputValue) => {
                setInputValue2(newInputValue);
              }}
              id="controllable-states-demo-1"
              options={options2}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="How would you like our sales agent to contact you ?"
                />
              )}
            />
          ) : (
            <TextField fullWidth label="BAN" id="ban" />
          )}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Is existing customer ?"
            />
          </FormGroup>
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
          <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />
        </Grid>
        <Grid item xs={12} className="quote-button">
          <Button className="quote-button-quote">Quote</Button>
        </Grid>
        <Grid item xs={12} className="quote-button">
          <p>We are commited to protect your privacy</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default RequestInfo;
