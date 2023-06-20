import { Box, Typography } from "@mui/material"


const Home = ( { nombre}) => {

  return (
    <Box>
      <Typography align="center" sx={{ marginTop: "30px", fontSize: "50px"}}>{nombre}</Typography>   
    </Box>
  ) 
}

export default Home