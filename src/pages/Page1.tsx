import { Link } from "react-router-dom";
import Container from "../components/Container";

const Page1 = () => {
  return (
    <Container style={{ background: "orange" }}>
      <h1>Page1</h1>
      <Link to={"/privacy"}>페이지 이동</Link>
    </Container>
  );
};

export default Page1;
