import React, { useState, useEffect, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/background.svg";
import { Config } from "../config";

//COMPONENTS
//import Rules from "../components/Rules";

//STORE
import { homePageStore } from "../store/state";

//CHACKRA UI
import { Button, Stack, useDisclosure } from "@chakra-ui/react";

// ASSETS
//import blob from "./../assets/blob.svg";

//COMPONENTS
//import { QrCode } from "../components/QrCode";

//SOCKET IO
import { io } from "socket.io-client";
import { config } from "process";

//STYLES
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${background});
`;

const Content = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Row = styled.div`
  margin: 5%;
  min-height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Column = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Code = styled.div`
  min-width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  aspect-ratio: 400/400;
`;

const Title = styled.h1`
  padding: 2%;
  font-size: 4em;
  font-weight: bold;
  font-family: "Shadows Into Light", cursive;
  text-align: center;
  color: black;
`;
export default function Home() {
  //REF
  const initiallRender = useRef(true);
  const { onOpen } = useDisclosure();

  //STATE
  const socket = io(Config.ENDPOINT);
  const history = useHistory();
  const { gameID, setGameID } = homePageStore();

  const generateRoom = () => {
    socket.emit("generate-room", socket.id);
    console.log("generate");
  };

  const startGame = () => {
    console.log("start game");
    history.push(`game/${gameID}`);
  };

  socket.on("generated-room", (generatedID) => {
    //setGameID(generatedID);
  });

  return (
    <Container>
      <Content>
        <Title> XOAD</Title>
        <Row>
          <Column>
            <Stack spacing={4} direction="column" align="center">
              <Button
                isFullWidth
                onClick={generateRoom}
                colorScheme="blackAlpha"
                size="lg"
              >
                Generate Room
              </Button>
              <Button
                isFullWidth
                onClick={startGame}
                colorScheme="blackAlpha"
                size="lg"
              >
                Start Game
              </Button>
            </Stack>
          </Column>
        </Row>
      </Content>
    </Container>
  );
}
