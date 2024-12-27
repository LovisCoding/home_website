import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import Theme from "./theme/theme.tsx";
import StylesMUI from "./theme/styles.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Theme>
          <StylesMUI/>
          <App/>
      </Theme>
  </StrictMode>,
)
