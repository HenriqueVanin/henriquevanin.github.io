import { Card } from "@mui/material";
import styled from "styled-components";

const CustomCard = styled(Card)`
  color: #fff;
  margin: 0;
  padding: 1rem;
`;

export default function Frame({ children }) {
  return (
    <CustomCard
      style={{
        backgroundColor: "transparent",
        borderColor: "#971bc2",
        color: "#ddd",
        borderRadius: 10,
      }}
      variant="outlined"
    >
      {children}
    </CustomCard>
  );
}
