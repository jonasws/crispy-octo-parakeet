// Import React
import React from "react";

import styled from "styled-components";
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Custom stuff
import Surprise from "./surprise";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  psychic: "https://media.giphy.com/media/l3V0qxVeyQ3bSLWbC/giphy.gif",
  questions: "https://media.giphy.com/media/l0HlVTZFGRBvNeFk4/giphy.gif"
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  quintenary: "goldenrod"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const StandoutSpan = styled.span`
  color: ${({textColor = theme.screen.colors.tertiary}) => textColor};
`;

const ColoredLink = styled.a`
  color: ${({textColor = 'deeppink'}) => textColor};
`;

const RedSpan = styled.span`
  color: crimson
`;


const Presentation = () =>
  <Deck transition={["zoom", "slide"]} transitionDuration={800} theme={theme}>
    <Slide>
      <Heading size={1}>Nye nettleser-APIer</Heading>
    </Slide>

    <Slide bgColor="secondary">
        <Text textColor="primary">Weben er ikke hva den en gang var.</Text>
        <Appear><Text textColor="quintenary" lineHeight={2}>Den er bedre!</Text></Appear>
    </Slide>

    <Slide>
      <Heading size={2} italic>Webens historie 101</Heading>
      <List>
        <ListItem>HTML <Appear><StandoutSpan>=> tekst, tekst, tekst</StandoutSpan></Appear></ListItem>
        <ListItem>JavaScript, CSS <Appear><StandoutSpan>Ting begynner å blinke</StandoutSpan></Appear></ListItem>
        <Appear><ListItem>Hva nå?</ListItem></Appear>
      </List>
    </Slide>

    <Slide>
      <Heading size={3}>Ikke dette!</Heading>
      <Image src={images.psychic} />
    </Slide>

    <Slide>
      <Heading size={2}>API-safari!</Heading>
      <List>
        <Appear><ListItem>Pirre nysgjerrigheten deres</ListItem></Appear>
        <Appear><ListItem>Gjøre oss bedre rusta for fremtidige oppgaver</ListItem></Appear>
      </List>
    </Slide>

    <Slide>
      <Heading>WebRTC</Heading>
      <List>
        <ListItem>Sanntidskommunikasjon</ListItem>
        <ListItem>P2P - ingen mellomledd!</ListItem>
        <ListItem>Bred støtte <Appear><RedSpan>- IE og Safari mangler</RedSpan></Appear></ListItem>
        <ListItem><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API">MDN-docs</a></ListItem>
      </List>
    </Slide>

    <Slide>
      <Heading>Service workers</Heading>
      <List>
        <ListItem>Offline-støtte</ListItem>
        <ListItem>Sentralt i diskusjonen om <S type="italic">Progressive Web Apps</S></ListItem>
        <Appear><ListItem textColor="crimson">Støttes ikke i Safari</ListItem></Appear>
      </List>
    </Slide>

    <Slide>
      <Heading>Web Bluetooth API</Heading>
      <List>
        <ListItem>BLE-interaksjon</ListItem>
        <ListItem>Nyttig for IoT-applikasjoner</ListItem>
        <Appear><ListItem textColor="quintenary">Fungerer i Chrome 56</ListItem></Appear>
        <Appear><ListItem textColor="quintenary">Kun over HTTPS</ListItem></Appear>
        <ListItem><a href="href=https://github.com/WebBluetoothCG/demos">Demos!</a></ListItem>
      </List>
    </Slide>

    <Slide>
      <Heading>HTML5 History API</Heading>
      <List>
        <ListItem>Navigering <Appear><StandoutSpan textColor="goldenrod">slik det skal være</StandoutSpan></Appear></ListItem>
        <Appear><ListItem>Hopp x frem og x tilbake osv osv.</ListItem></Appear>
        <Appear><ListItem> No more <Code>window.location = xxx</Code></ListItem></Appear>
        <Appear><ListItem><ColoredLink  textColor="deeppink" href="https://developer.mozilla.org/en-US/docs/Web/API/History_API">Eksemplicus!</ColoredLink></ListItem></Appear>
      </List>
    </Slide>

    <Slide>
      <Heading>CSS Grid</Heading>
      <List>
        <Appear><ListItem>"Boostrap-dödaren"</ListItem></Appear>
        <ListItem>2-dimensjonal layout</ListItem>
        <Appear><ListItem textColor="crimson">Støtten er "så som så"</ListItem></Appear>
      </List>
    </Slide>

    <Slide>
      <Heading>Web Audio API</Heading>
      <List>
        <Appear><ListItem>For de som egentlig skulle ønske de ble DJs</ListItem></Appear>
        <ListItem>Manipulere lyd-kanaler</ListItem>
        <ListItem>Gjør det mulig å få til ganske mye sprøtt, f. eks <ColoredLink textColor="hotpink" href="https://github.com/FormidableLabs/react-music">react-music</ColoredLink></ListItem>
        <Appear><ListItem textColor="crimson">Støttes ikke i IE</ListItem></Appear>
      </List>
    </Slide>

    <Slide>
      <Heading>Websocket</Heading>
      <List>
        <ListItem>Event-drevet kommunikasjonskanal</ListItem>
        <ListItem>Hjernen bak mange sanntidsløsninger</ListItem>
        <Appear><ListItem>"Twitch plays Pokemon"</ListItem></Appear>
      </List>
    </Slide>

    <Slide bgColor="secondary">
      <Heading size={2} textColor="primary">Spørsmål?</Heading>
      <Image src={images.questions} />
    </Slide>
  </Deck>;

export default Presentation;
