import React from "react";
import styled from "styled-components";
import { SecoundryButton } from "../atoms/button/SecoundryButton";
import { useHistory } from "react-router-dom";

export const Top = () => {
  const history = useHistory();

  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });
  return (
    <SContainer>
      <h2>TOP Page here</h2>
      <SecoundryButton onClick={onClickAdmin}>manarger</SecoundryButton>
      <br />
      <br />
      <SecoundryButton onClick={onClickGeneral}>user</SecoundryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
