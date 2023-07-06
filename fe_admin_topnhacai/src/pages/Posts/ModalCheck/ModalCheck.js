import { Button, List, Menu, Modal, Tabs } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { checkKeyFocus } from "../../../helpers/helper";
import { Tab } from "bootstrap";
const ModalCheck = ({ id, keyword }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    handleCheck();
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCheck = async () => {
    setLoading(true);
    if (keyword) {
      let dataReq = { keyword: keyword?.map((item) => item.text), id: id };
      let res = await checkKeyFocus(dataReq);
      setData(res?.result);
    }
    setLoading(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Kiểm tra
      </Button>
      <Modal
        title="Kiểm tra key focus"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tabs
          type="card"
          items={data?.map((item) => {
            return {
              label: `${item.key}`,
              key: item.key,
              children: (
                <List
                  loading={loading}
                  bordered
                  style={{ height: "400px", overflow: "scroll" }}
                  dataSource={item?.value}
                  renderItem={(item) => (
                    <List.Item>
                      <p style={{ background: "#ffd9b7", padding: "2px" }}>
                        {item?.post_title}
                      </p>
                    </List.Item>
                  )}
                ></List>
              ),
            };
          })}
        />
      </Modal>
    </>
  );
};
export default ModalCheck;
