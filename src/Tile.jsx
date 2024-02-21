import { Box } from "@chakra-ui/react";

//Difficulty resolving mistakes in mightymeld app
export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Box
          onClick={flip}
          display="inline-block"
          textAlign="center"
          bg="#66c3a7"
          width="70px"
          height="70px"
          borderRadius="5px"
        ></Box>
      );
    case "flipped":
      return (
        <Box
          display="inline-block"
          textAlign="center"
          bg="yellow.500"
          height="70px"
          width="70px"
          bgColor="#1cbe8e93"
          borderRadius="5px"
        >
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
              color: "#ffffff",
            }}
          />
        </Box>
      );
    case "matched":
      return (
        <Box
          display="inline-block"
          textAlign="center"
          color="gray.300"
          width="60px"
          height="60px"
        >
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
              color: '"#fff"',
              opacity: 0.7,
            }}
          />
        </Box>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}
