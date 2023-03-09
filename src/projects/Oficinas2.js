import { Divider, Grid } from "@mui/material";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Oficinas2() {
  return (
    <Grid container direction={"column"} spacing={2}>
      <Grid item>
        <Title>Projeto de Oficinas 2</Title>
      </Grid>
      <Divider />
      <Grid item>
        <Text>Grupo</Text>
        <Text>Augusto Carvalho de Freitas</Text>
        <Text>Henrique Nelson da Silva Vanin</Text>
        <Text>Luiz Augusto</Text>
      </Grid>
      <Grid item>
        <Title>Propostas</Title>
      </Grid>
    </Grid>
  );
}
