// import React from 'react';
// import { createRoot } from 'react-dom';
// import { WagmiConfig } from 'wagmi';
// import HomePage from '../components/HomePage';

// const wagmiConfig = {
//   autoConnect: false,
//   connectors: [
//     {
//       type: 'walletconnect',
//       options: { infuraId: process.env.NEXT_PUBLIC_PROJECT_ID }
//     },
//     {
//       type: 'alchemy',
//       options: { apiKey: process.env.ALCHEMY_ID }
//     }
//   ],
//   publicClient: [
//     {
//       type: 'infura',
//       options: { projectId: process.env.NEXT_PUBLIC_INFURA_ID }
//     },
//     {
//       type: 'alchemy',
//       options: { apiKey: process.env.ALCHEMY_ID }
//     }
//   ]
// };

// const root = document.getElementById('root');

// if (root) {
//   createRoot(root).render(
//     <WagmiConfig config={wagmiConfig}>
//       <HomePage />
//     </WagmiConfig>
//   );
// }

import '@rainbow-me/rainbowkit/styles.css';
import { ReactNode } from 'react';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import HomePage from '../components/HomePage';
import {configureChains, createConfig, WagmiConfig} from 'wagmi';
import {hardhat } from 'wagmi/chains';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';
import dotenv from 'dotenv';
dotenv.config();

const alchemyId = 'KswtTzOgycowpaOL9gMPYeOHSsN9_L7P';
const IdProject= '826d83783eec2cf14623cb5f92018f04';

const { chains, publicClient } = configureChains(
  [hardhat],
  [
    alchemyProvider({ apiKey: alchemyId }),
    publicProvider()
  ]
);

const projectId = IdProject;

if (!projectId) {
  throw new Error("PROJECT_ID is not defined in .env.local file");
}

const { connectors } = getDefaultWallets({
  appName: 'Factify',
  projectId: projectId,
  chains
});

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient
})

export default function RootLayout({children} : { children: ReactNode }) {
  return (

        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
              <HomePage />
            </RainbowKitProvider>
        </WagmiConfig>
  );
}
