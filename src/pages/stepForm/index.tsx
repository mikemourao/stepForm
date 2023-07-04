import { Button, Step, StepLabel, Stepper, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { BoxContainer, BoxField } from '../../components/stepForm/index.tsx';

const Formulario = () => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [inputFieldsContact, setInputFieldsContact] = useState({
    name: "",
    email: "",
  });

  const [inputFieldsCompany, setInputFieldsCompany] = useState({
    cnpj: "",
    fantasy_name: ""
  });

  const [inputFieldsProject, setInputFieldsProject] = useState({
    projectName: ""
  });

  const [camposValidos, setCamposValidos] = useState(false);
  const [camposValidosCompany, setCamposValidosCompany] = useState(false);

  useEffect(() => {
    const { name, email } = inputFieldsContact;
    const { cnpj, fantasy_name } = inputFieldsCompany;

    // Verificar se todos os campos obrigatórios estão preenchidos
    const camposPreenchidos = name.trim() !== '' && email.trim() !== '';
    const camposPreenchidosCompany = cnpj.trim() !== '' && fantasy_name.trim() !== '';

    // Atualizar o estado dos campos válidos
    setCamposValidos(camposPreenchidos);
    setCamposValidosCompany(camposPreenchidosCompany);
  }, [etapaAtual, inputFieldsContact, inputFieldsCompany]);

  const handleChangeInput = (name: string, value: string) => {
    setInputFieldsContact((prevInputFields) => ({
      ...prevInputFields,
      [name]: value
    }));
  };

  const handleChangeInputCompany = (name: string, value: string) => {
    setInputFieldsCompany((prevInputFields) => ({
      ...prevInputFields,
      [name]: value
    }));
  };

  const handleChangeInputProject = (name: string, value: string) => {
    setInputFieldsProject((prevInputFields) => ({
      ...prevInputFields,
      [name]: value
    }));
  };

  const avancarEtapa = () => {
    if (etapaAtual === 0 && !camposValidos) {
      console.log('Preencha todos os campos obrigatórios');
      return;
    }

    if (etapaAtual === 1 && !camposValidosCompany) {
      console.log('Preencha todos os campos obrigatórios');
      return;
    }

    setEtapaAtual(etapaAtual + 1);
  };

  const voltarEtapa = () => {
    setEtapaAtual(etapaAtual - 1);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!camposValidos || !camposValidosCompany) {
      console.log('Preencha todos os campos obrigatórios');
      return;
    }

    console.log('Valores do formulário:', inputFieldsContact, inputFieldsCompany);
    // Lógica para enviar os dados do formulário
  };

  return (
    <BoxContainer onSubmit={handleSubmit}>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Contato</StepLabel>
        </Step>
        <Step>
          <StepLabel>Empresa</StepLabel>
        </Step>
        <Step>
          <StepLabel>Projeto</StepLabel>
        </Step>
      </Stepper>

      {etapaAtual === 0 && (
        <BoxField>
          <TextField
            className='test'
            required
            id="outlined-required"
            label="Nome"
            sx={{ marginBottom: '20px' }}
            color="info" focused
            value={inputFieldsContact.name}
            onChange={(event) =>
              handleChangeInput('name', event.target.value)
            }
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            sx={{ marginBottom: '20px' }}
            color="info" focused
            value={inputFieldsContact.email}
            onChange={(event) =>
              handleChangeInput('email', event.target.value)
            }
          />
          {/* Campos do formulário da etapa 1 */}
          <Button variant="contained" onClick={avancarEtapa} disabled={!camposValidos}>
            Avançar
          </Button>
        </BoxField>
      )}

      {etapaAtual === 1 && (
        <BoxField>
          <TextField
            className='test'
            required
            id="outlined-required"
            label="CNPJ"
            sx={{ marginBottom: '20px' }}
            color="info" focused
            value={inputFieldsCompany.cnpj}
            onChange={(event) =>
              handleChangeInputCompany('cnpj', event.target.value)
            }
          />
          <TextField
            required
            id="outlined-required"
            label="Nome Fantasia"
            sx={{ marginBottom: '20px' }}
            color="info" focused
            value={inputFieldsCompany.fantasy_name}
            onChange={(event) =>
              handleChangeInputCompany('fantasy_name', event.target.value)
            }
          />
          {/* Campos do formulário da etapa 1 */}
          <Button variant="contained" onClick={voltarEtapa}>Voltar</Button>
          <Button variant="contained" onClick={avancarEtapa} disabled={!camposValidosCompany}>
            Avançar
          </Button>
        </BoxField>
      )}

      {etapaAtual === 2 && (
        <BoxField>
          <TextField
            required
            id="outlined-required"
            label="Nome do Projeto"
            sx={{ marginBottom: '20px' }}
            color="info"
            focused
            value={inputFieldsProject.projectName}
            onChange={(event) =>
              handleChangeInputProject('projectName', event.target.value)
            }
          />
          {/* Campos do formulário da etapa 3 */}
          <Button variant="contained" onClick={voltarEtapa}>Voltar</Button>
          <Button variant="contained" type="submit" disabled={!camposValidos || !camposValidosCompany || inputFieldsProject.projectName.trim() === ""}>
            Enviar
          </Button>
        </BoxField>
      )}
    </BoxContainer>
  );
};

export default Formulario;
