import { CSSProperties, FC, ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Container: FC<{
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}> = ({ className = "", ...props }) => {
  return (
    <StyledContainer style={{ ...props.style }} className={className}>
      {props.children}
    </StyledContainer>
  );
};

export default Container;
