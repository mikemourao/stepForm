import { Box, BoxProps, styled } from "@mui/material";

export const BoxContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  margin: '20px',
  borderRadius: '20px',
  background: '#37474f',
  width: '50%', // Adiciona essa linha para definir a largura como 50%
  // height: '50%', // Adiciona essa linha para definir a altura como 50%
  position: 'fixed', // Adiciona essa linha para centralizar o componente na tela
  top: '50%', // Adiciona essa linha para posicionar o componente verticalmente no centro
  left: '50%', // Adiciona essa linha para posicionar o componente horizontalmente no centro
  transform: 'translate(-50%, -50%)', // Adiciona essa linha para centralizar o componente
  color: '#e91e63',
  '& span': {
    color: '#fff'
  },
  '& .Mui-active': {
    color: '#1976d2 !important',
  },
  '& .Mui-completed': {
    color: '#40e91e !important'
  }
}));
