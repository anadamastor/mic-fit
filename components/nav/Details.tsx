import { AppBar, Box, Button, Typography } from "@mui/material";

export const Details = () => {
  return (
    <Box>
      <Box
        width={"100%"}
        component="img"
        alt="Foto Michela"
        src="images/pic_bw.jpg"
      />
      <Typography
        sx={{ "margin-top": 24, color: "white" }}
        align="center"
        variant="h4"
        fontSize={40}
      >
        Ciao, sono Michela!
      </Typography>
      <Typography
        sx={{ "margin-top": 30, color: "white" }}
        align="center"
        variant="h6"
        fontWeight={100}
        fontSize={14}
      >
        Istruttrice Boxe Thailandese Federkombat
        <br />
        Asp. Tecnico Pugilcatp FPI <br />
        Personal Trainer Certificato FIF <br />
        Preparatrice Atletica FIF <br />
      </Typography>
      <Typography
        sx={{ "margin-top": 30, color: "white" }}
        align="center"
        variant="h6"
        fontWeight={100}
        fontSize={14}
      >
        Lezioni private e personalizzate
        <br />
        Programmi di dimagrimento e tonificazione ipertrofica
        <br />
        Allenamento funzionale sviluppo forza
      </Typography>

      <Button
        variant="contained"
        size="large"
        color="primary"
        target="_top"
        rel="noopener noreferrer"
        href={`mailto:test@example.com`}
      >
        <Typography variant="button" style={{ fontSize: "0.69rem" }}>
          Email
        </Typography>
      </Button>
    </Box>
  );
};
