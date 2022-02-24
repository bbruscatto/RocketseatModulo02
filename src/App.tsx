import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
