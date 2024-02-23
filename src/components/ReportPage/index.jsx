import { useState } from "react";
import { Box, Container } from "@mui/material";
import useStyles from "./Styles";
import FormContainer from "./FormContainer";
import ProgressBar from "./ProgressBar";

const ReportPage = () => {
  const classes = useStyles();
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const openChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <Box className={classes.container}>
      <Box
        className={`${classes.icoon} ${
          isChatboxOpen ? classes.transimageOpen : ""
        }`}
      >
        <img
          className={`${classes.image}`}
          src="https://via.placeholder.com/150.png"
          alt="Image"
          onClick={openChatbox}
        />
      </Box>
      <Box
        className={`${classes.chatbox} ${
          isChatboxOpen ? classes.openChatbox : ""
        }`}
      >
        <ProgressBar />

        <Box className={classes.chatboxContainer}>
          <div
            className={`${classes.fadeOverlay} ${classes.fadeOverlayTop}`}
          ></div>
          <Container disableGutters>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              veritatis commodi quos rem officiis reprehenderit facere rerum
              enim esse sint? Ducimus nisi animi optio nemo tenetur et dolore
              voluptatem incidunt.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              veritatis commodi quos rem officiis reprehenderit facere rerum
              enim esse sint? Ducimus nisi animi optio nemo tenetur et dolore
              voluptatem incidunt.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              veritatis commodi quos rem officiis reprehenderit facere rerum
              enim esse sint? Ducimus nisi animi optio nemo tenetur et dolore
              voluptatem incidunt.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              veritatis commodi quos rem officiis reprehenderit facere rerum
              enim esse sint? Ducimus nisi animi optio nemo tenetur et dolore
              voluptatem incidunt.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              veritatis commodi quos rem officiis reprehenderit facere rerum
              enim esse sint? Ducimus nisi animi optio nemo tenetur et dolore
              voluptatem incidunt.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              veritatis commodi quos rem officiis reprehenderit facere rerum
              enim esse sint? Ducimus nisi animi optio nemo tenetur et dolore
              voluptatem incidunt.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              veritatis commodi quos rem officiis reprehenderit facere rerum
              enim esse sint? Ducimus nisi animi optio nemo tenetur et dolore
              voluptatem incidunt.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              veritatis commodi quos rem officiis reprehenderit facere rerum
              enim esse sint? Ducimus nisi animi optio nemo tenetur et dolore
              voluptatem incidunt.
            </Box>
          </Container>
        </Box>

        <FormContainer />
      </Box>
    </Box>
  );
};

export default ReportPage;
