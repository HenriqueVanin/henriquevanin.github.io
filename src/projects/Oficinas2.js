import { Divider, Grid } from "@mui/material";
import Frame from "../components/Frame";
import Post from "../components/Post";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Oficinas2() {
  return (
    <Grid
      container
      item
      lg={8}
      direction={"column"}
      spacing={3}
      style={{ padding: "1rem" }}
    >
      <Grid item>
        <Title>Projeto de Oficinas 2</Title>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item lg={4}>
          <Frame>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              lg={6}
            >
              <Title>Disciplina</Title>
              <Text>Oficinas de Integração 2</Text>
              <Title>Professores</Title>
              <Text>Rossato e Benitez</Text>
              <Divider style={{ marginTop: 10, marginBottom: 10 }} />
              <Text>Grupo</Text>
              <Text>Augusto Carvalho de Freitas</Text>
              <Text>Henrique Nelson da Silva Vanin</Text>
              <Text>Luiz Augusto</Text>
              <Text>Guilherme Libério de Silva e Souza</Text>
            </Grid>
          </Frame>
        </Grid>
        <Grid container item lg={8}>
          <Grid item lg={12}>
            <Post
              date={"08/03"}
              title={"Proposta"}
              subtitle={"Ideia de projeto : Tradutor de Libras para Palavras"}
              text={
                "Um dispositivo que possui uma câmera que identifica palavras em libras, interpreta-as e traduz em som com palavras faladas."
              }
            />
          </Grid>
          <Grid item lg={12}>
            <Post
              date={"08/03"}
              title={"Avaliação de Proposta"}
              subtitle={"Tradutor de Libras para Palavras"}
              text={
                "Envio de email aos professores Lazzareti e Heitor questionando sobre a viabilidade da proposta pensada."
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
