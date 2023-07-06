import { jSXNamespacedName } from "@babel/types";
import { Button, Checkbox, Col, Form, Modal, Row } from "antd";
import { val } from "dom7";
import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { editPermission } from "../../../helpers/api/permission.service";
import { exportPermission } from "../constants";

const EditPermission = ({ permission, success }) => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);

  const [form] = Form.useForm();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = async (values) => {
    if (!values?.view) {
      values.edit = false;
      values.add = false;
      values.del = false;
    }
    let res = await editPermission(permission?._id, values);
    if (res.success) {
      toast.success("Sửa quyền hạn thành công!");
      success();
      handleClose();
    } else {
      toast.error("Sửa quyền hạn không thành công!");
    }
  };
  const handleGetValue = () => {
    setView(permission?.view);
    form.setFieldsValue(permission);
  };
  useEffect(() => {
    handleGetValue();
  }, [permission]);
  // const handleDisableView = () => {
  // };

  // useEffect(() => {
  //   handleDisableView();
  // }, [view]);
  return (
    <>
      <AiFillEdit
        style={{ color: "blue", cursor: "pointer" }}
        onClick={handleOpen}
      />
      <Modal
        title={`Sửa phân quyền ${exportPermission(permission.name)}`}
        open={open}
        onCancel={handleClose}
        footer={false}
      >
        <Form form={form} layout="inline" onFinish={handleEdit}>
          <Row style={{ width: "100%" }}>
            <Col lg={8}>
              <Form.Item label="Xem" name="view" valuePropName="checked">
                <Checkbox value={view} onChange={(e) => setView(!view)} />
              </Form.Item>
            </Col>
            <Col lg={8}>
              <Form.Item label="Thêm" name="add" valuePropName="checked">
                <Checkbox disabled={!view} />
              </Form.Item>
            </Col>
            <Col lg={8}>
              <Form.Item label="Sửa" name="edit" valuePropName="checked">
                <Checkbox disabled={!view} />
              </Form.Item>
            </Col>
            <Col lg={8}>
              <Form.Item label="Xóa" name="delete" valuePropName="checked">
                <Checkbox disabled={!view} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default EditPermission;
