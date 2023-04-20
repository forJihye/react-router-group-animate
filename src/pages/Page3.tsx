import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

const Page3 = () => {
  const navigate = useNavigate();

  return (
    <Container style={{ background: "skyblue" }}>
      <h1>Page3</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </Container>
  );
};

export default Page3;
