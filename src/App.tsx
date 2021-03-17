import React, { useState } from 'react'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/TransactionsContext';

import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

  function handleOpenNewTransactioModal() {
    setIsNewTransactionsModalOpen(true)
  }

  function handleCloseNewTransactioModal() {
    setIsNewTransactionsModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactioModal} />
      <Dashboard/>

      <NewTransactionModal isOpen={isNewTransactionsModalOpen} onRequestClose={handleCloseNewTransactioModal} />

      <GlobalStyle/>
    </TransactionsProvider>
  );
}
