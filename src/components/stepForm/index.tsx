import { Box, BoxProps, styled } from "@mui/material";

export const BoxContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  margin: '20px',
  background: theme.palette.background.default
}));
