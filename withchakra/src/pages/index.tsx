import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box, Button } from "@chakra-ui/react";

const Index = () => {
  const [pos, setPos] = useState(null);

  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  return (
    <Box m="0 auto" w="70%" height="500px" mt={10}>
      <MapWithNoSSR pos={pos} setPos={setPos} />
      <Button w="100%" mt={4} p={10} onClick={() => console.log(pos)}>
        Enter
      </Button>
    </Box>
  );
};
export default Index;
