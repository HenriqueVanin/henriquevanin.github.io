import { Typography } from "@mui/material";
import styled from "styled-components";

const CustomTypography = styled(Typography)``;

export default function Text({ children }) {
  return <CustomTypography>{children}</CustomTypography>;
}
