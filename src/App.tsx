import { useState, useRef } from "react";
import "./App.css";
import ReactEditor from "./pages/reactEditor";
import { Modal, Button } from "antd";

function App() {
  const pchildref: any = useRef({});

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // model确认前  执行editor销毁事件
  const handleOk = () => {
    pchildref.current.destroyAction();
    setIsModalVisible(false);
  };

  // model关闭前 执行editor销毁事件
  const handleCancel = () => {
    pchildref.current.destroyAction();
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          destroyOnClose={true}
        >
          <ReactEditor wrapRef={pchildref} />
        </Modal>
      </header>
    </div>
  );
}

export default App;
