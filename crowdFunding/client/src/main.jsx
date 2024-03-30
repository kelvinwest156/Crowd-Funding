import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider, coinbaseWallet, embeddedWallet, metamaskWallet, walletConnect } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider activeChain={'mumbai'} clientId='c689631e4f150c3b683a48abcb1ca298'
    supportedWallets={[
      metamaskWallet({recommended: true}),
      coinbaseWallet(),
      walletConnect({recommended: true}),
      embeddedWallet({
        auth: {
          options:  ["google", "apple", "email"],
        },
      }),
    ]}
    
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)