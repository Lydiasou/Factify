'use client';
import '@rainbow-me/rainbowkit/styles.css';
import { ReactNode } from 'react';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import { BrowserRouter as Router } from 'react-router-dom';

import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';

import HomePage from '../components/HomePage';
import {configureChains, createConfig, WagmiConfig} from 'wagmi';
import {hardhat } from 'wagmi/chains';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';
import { Web3ReactProvider } from '@web3-react/core';
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

        {typeof window !== 'undefined' && (
          <Router>
            <HomePage />
          </Router>
        )}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
