import { AppBar, Box, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Margin, PhoneInTalk } from "@mui/icons-material";
export const Details = () => {
  return (
    <Box textAlign="center">
      <Box>
        <Typography
          sx={{ "padding-top": 24 }}
          align="center"
          variant="h1"
          fontSize={40}
        >
          Michela Mancini Fitness
        </Typography>
        <Typography
          sx={{ "margin-bottom": 10, color: "white" }}
          align="center"
          variant="h5"
        ></Typography>
        <Typography
          sx={{ color: "white" }}
          align="center"
          variant="h6"
          fontWeight={100}
          fontSize={16}
        >
          Istruttrice Boxe Thailandese Federkombat
          <br />
          Asp. Tecnico Pugilcato FPI <br />
          Personal Trainer Certificato FIF <br />
          Preparatrice Atletica FIF <br />
        </Typography>
        <Box
          mx="auto" // Center the image horizontally
          width={"50%"} // Adjust the width for scaling
          component="img"
          alt="Foto Michela"
          // src="images/pic_bw.jpg"
          src="images/pic_michi.jpg"
          // sx={{ borderRadius: "90%" }}
          sx={{ display: "block", borderRadius: "20%", marginY: 2 }} // Adjust marginY as needed
        />
      </Box>

      <Typography
        sx={{ "margin-top": 30, color: "white" }}
        align="center"
        variant="h6"
        // fontWeight={100}
        fontSize={20}
      >
        Contattami per:
      </Typography>
      <Typography
        sx={{ color: "white" }}
        align="center"
        variant="h6"
        fontWeight={100}
        fontSize={16}
      >
        Lezioni private e personalizzate
        <br />
        Programmi di dimagrimento
        <br />
        Allenamento funzionale
        <br />
        Tonificazione e ipertrofia
        <br />
        Sviluppo forza
      </Typography>
      <Box mx="auto" mt={3} gap={2} display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          target="_top"
          rel="noopener noreferrer"
          href="tel:+393393676694"
          endIcon={<PhoneInTalk />}
        >
          Cell
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          target="_top"
          rel="noopener noreferrer"
          href={`mailto:michela.mancini@gmail.com `}
          endIcon={<SendIcon />}
        >
          Email
        </Button>{" "}
      </Box>
    </Box>
  );
};
