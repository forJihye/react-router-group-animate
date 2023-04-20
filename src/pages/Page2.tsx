import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";

const Page2 = () => {
  const navigate = useNavigate();

  return (
    <Container style={{ background: "green" }}>
      <h1>Page2</h1>
      <Link to={"/cutType"}>페이지 이동</Link>
      <button onClick={() => navigate(-1)}>Go back</button>
    </Container>
  );
};

export default Page2;
