import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactEditor from './pages/reactEditor';
import { Modal, Button } from 'antd';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <ReactEditor />
        </Modal>
      </header>
    </div>
  );
}

export default App;
