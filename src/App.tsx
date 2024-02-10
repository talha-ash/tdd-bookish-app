import Typography from "@mui/material/Typography";
import BookListContainer from "./BookListContainer";
import { makeServer } from "./server";
makeServer();
function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookListContainer />
    </>
  );
}

export default App;
