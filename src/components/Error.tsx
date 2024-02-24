import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function ErrorAlert() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Errore imprevisto durante il caricamento della pagina —{" "}
        <strong>controlla la tua connessione</strong> e riprova.
      </Alert>
    </Stack>
  );
}
