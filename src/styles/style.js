import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        greenclr: {
          main: '#2B817B',
        },
        tomatoclr: {
          main: 'tomato',
        },
      },
      typography: {
        fontFamily: "Lato",
        // fontFamily: "Poppins",
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
})

export default theme