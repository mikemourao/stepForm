import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { useState } from 'react';
import { BoxContainer } from '../../components/stepForm/index.tsx';

const Formulario = () => {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const avancarEtapa = () => {
    setEtapaAtual(etapaAtual + 1);
  };

  const voltarEtapa = () => {
    setEtapaAtual(etapaAtual - 1);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('aqui'); // criar onchange para ficar figiando valores inputados
    // Lógica para enviar os dados do formulário
  };

  return (
    <BoxContainer
      onSubmit={handleSubmit}
    >
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Etapa 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Etapa 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Etapa 3</StepLabel>
        </Step>
      </Stepper>

      {etapaAtual === 0 && (
        <div>
          <h2>Etapa 1</h2>
          {/* Campos do formulário da etapa 1 */}
          <Button variant="contained" onClick={avancarEtapa}>Avançar</Button>
        </div>
      )}

      {etapaAtual === 1 && (
        <div>
          <h2>Etapa 2</h2>
          {/* Campos do formulário da etapa 2 */}
          <Button variant="contained" onClick={voltarEtapa}>Voltar</Button>
          <Button variant="contained" onClick={avancarEtapa}>Avançar</Button>
        </div>
      )}

      {etapaAtual === 2 && (
        <div>
          <h2>Etapa 3</h2>
          {/* Campos do formulário da etapa 3 */}
          <Button variant="contained" onClick={voltarEtapa}>Voltar</Button>
          <Button variant="contained" type="submit">Enviar</Button>
        </div>
      )}
    </BoxContainer>
  );
};

export default Formulario;
