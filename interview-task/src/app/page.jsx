
import { Container } from "@mui/material";
import { getURL} from "./utils/urlActions";
import Form from "@/components/Form";
import BasicTable from "@/components/Table";

export default async function Home() {
const data = await getURL("http://localhost:3000/api/url")


  return (

    <Container sx={{marginTop:"4rem"}}>
      <Container>
      <Form/>
   {/* {data.map(item => (
     <h1 key={item._id}>{item.url}</h1>
   ))}  */}
     <BasicTable urls={data}/>
      </Container>
    </Container>
  );
}
