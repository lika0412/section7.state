import React, { useContext } from "react";
import styled from "styled-components";
import { userContext } from "../../../providers/UserProvider";

export const UserIcon = (props) => {
  const { image, name, isAdmin } = props;
  const context = useContext(userContext);
  console.log(context);
  return (
    <SContainer>
      <SIcon height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>EDIT</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SIcon = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
