import styled from "styled-components";
import Avatar from "@material-ui/core";

function Sidebar() {
  return (
    <Container>
      <h1>Sidebar</h1>
      <Header></Header>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div``;

const userAvatar = styled(Avatar)``;
