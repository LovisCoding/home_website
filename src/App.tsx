

import { Stack, Typography} from "@mui/material";
import Sites from "./components/Sites.tsx";

function App() {
  return (

     <Stack spacing={4} direction="column" mx={4} mt={4}>
        <Typography variant="h2" sx={{textAlign: 'center', }}>Arthur Lecomte</Typography>
         <Sites/>
     </Stack>

  )
}

export default App
