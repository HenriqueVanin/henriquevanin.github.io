import { Divider, Grid } from "@mui/material";
import Frame from "./Frame";
import Text from "./Text";
import Title from "./Title";

export default function Post({ date, title, subtitle, text }) {
  return (
    <Frame>
      <Grid container>
        <Grid item lg={1}>
          <Title style={{ color: "#6d43f9", fontSize: 16 }} variant="overline">
            {date}
          </Title>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          style={{
            marginRight: "1rem",
            backgroundColor: "#971bc2",
          }}
        />
        <Grid
          container
          item
          direction={"column"}
          alignItems="flex-start"
          lg={10}
        >
          <Grid item>
            <Text style={{ color: "#6d43f9" }} variant="h6">
              {title}
            </Text>
          </Grid>
          <Grid item>
            <Text style={{ color: "#442a9a" }} variant="subtitle2">
              {subtitle}
            </Text>
          </Grid>
          <Grid item>
            <Text style={{ textAlign: "justify" }}>{text}</Text>
          </Grid>
        </Grid>
      </Grid>
    </Frame>
  );
}
