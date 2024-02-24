import { AppContext } from "@/ContextProvider";
import { Alert, AlertTitle, Button, Stack, TextField, styled } from "@mui/material";
import { useContext, useState } from "react";

const PayForm = styled("form")({
  width: "25%",
  border: "1px solid black",
  borderRadius: "5px",
  margin: "20px auto auto auto",
  textAlign: "center",
  padding: "20px",
});

const FieldDiv = styled("div")({
  margin: "10px",
});

const GoBack = styled("a")({
    color: "currentColor",
    cursor: "pointer",
    "&:hover": {
        color: "currentColor",
        textDecoration: "underline",
    }
});

export default function Form() {
  const { done } = useContext(AppContext);

  const [firstName, setFirstName] = useState<string>("");
  const [isFirstNameValid, setIsFirstNameValid] = useState<boolean>(false);
  const [lastName, setLastName] = useState<string>("");
  const [isLastNameValid, setIsLastNameValid] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [isCardNumberValid, setIsCardNumberValid] = useState<boolean>(false);
  const isFormValid = isFirstNameValid && isLastNameValid && isCardNumberValid;
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  function onChangeFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      setIsFirstNameValid(false);
    } else {
      setIsFirstNameValid(true);
    }
    setFirstName(e.target.value);
  }

  function onChangeLastName(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      setIsLastNameValid(false);
    } else {
      setIsLastNameValid(true);
    }
    setLastName(e.target.value);
  }

  function onChangeCardNumber(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length < 12 || e.target.value.length > 16) {
      setIsCardNumberValid(false);
    } else {
      setIsCardNumberValid(true);
    }
    setCardNumber(e.target.value);
  }

  function onClickAcquista() {
    setIsFormSubmitted(true);
  }

  function onClickGoBack() {
    done();
  }

  return (
    <>
      {isFormSubmitted ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Acquisto effettuato con successo. <GoBack onClick={onClickGoBack}>Clicca per tornare alla home</GoBack>
          </Alert>
        </Stack>
      ) : (
        <PayForm>
          <FieldDiv>
            <TextField
              id="standard-multiline-flexible"
              label="Nome"
              variant="standard"
              value={firstName}
              onChange={onChangeFirstName}
            />
          </FieldDiv>
          <FieldDiv>
            <TextField
              id="standard-multiline-flexible"
              label="Cognome"
              variant="standard"
              value={lastName}
              onChange={onChangeLastName}
            />
          </FieldDiv>
          <FieldDiv>
            <TextField
              id="standard-multiline-flexible"
              label="Numero carta"
              type="number"
              variant="standard"
              inputProps={{
                minLength: 12,
                maxLength: 16,
              }}
              value={cardNumber}
              onChange={onChangeCardNumber}
            />
          </FieldDiv>
          <Button
            variant="contained"
            disabled={!isFormValid}
            onClick={onClickAcquista}
          >
            Acquista
          </Button>
        </PayForm>
      )}
    </>
  );
}
