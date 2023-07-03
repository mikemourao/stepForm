import { CssBaseline, GlobalStyles } from '@mui/material'
import Index from './pages/stepForm/index.tsx'

export function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { background: '#22262c' }
        }}
      />
      < Index />
    </>
  )
}
