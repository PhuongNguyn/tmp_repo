import React, { useCallback, useEffect, useRef, useState } from "react";

//import Components
import BreadCrumb from "../../Components/Common/BreadCrumb";
import toast, { Toaster } from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";
import { FcCheckmark } from "react-icons/fc";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

import {
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  Badge,
  Checkbox,
  message,
  Space,
  Table,
  Modal,
  Select,
  Popconfirm,
  Tooltip,
} from "antd";
import { Link } from "react-router-dom";
import {
  editRolePermission,
  getAllPermissions,
  getAllRole,
  getAllUsers,
} from "../../helpers/helper";
import { exportPermission } from "./constants";
import {
  getPermissionByRole,
  deletePermission,
} from "../../helpers/api/permission.service";
import ModalAddPermission from "./ModalAddPermission";
import EditPermission from "./EditPermission";
import { useContext } from "react";
import PermissionContext from "../../context/PermissionContext";
const { Option } = Select;
const { Column } = Table;

const UsersPermission = () => {
  document.title = "Users Permission";
  const [roles, setRoles] = useState([]);
  const [userFlag, setUserFlag] = useState(false);
  const [role, setRole] = useState("");
  const [permissionList, setPermissionList] = useState([]);
  const [loading, setLoading] = useState(false);
  const refLoading = useRef();
  const { permission, user } = useContext(PermissionContext);
  const [isPermission, setIsPermission] = useState({});
  const handlePermission = async () => {
    let userPermission = permission.find((item) => item.name === "permission");
    setIsPermission(userPermission);
  };

  useEffect(() => {
    handlePermission();
  }, [permission, user]);

  const getRoles = () => {
    getAllRole().then((result) => {
      setRoles(result.roles);
      setRole(result?.roles?.[0]._id);
    });
  };

  useEffect(() => {
    if (!userFlag) getRoles();

    setUserFlag(true);
  }, [userFlag]);

  const handleChangeRole = (e) => {
    setRole(e);
  };

  const handleGetPermission = async () => {
    setLoading(true);
    let res = await getPermissionByRole(role);
    setPermissionList(res?.result || res?.data);
    setLoading(false);
  };

  useEffect(() => {
    handleGetPermission();
  }, [role]);

  const onSuccess = () => {
    handleGetPermission(role);
  };

  const columns = [
    {
      title: "Tên phân quyền",
      dataIndex: "name",
      render: (value) => {
        return exportPermission(value);
      },
    },
    {
      title: "Xem",
      dataIndex: "view",
      render: (value) => {
        return (
          <>
            {value ? (
              <FcCheckmark />
            ) : (
              <MdOutlineClose style={{ color: "red" }} />
            )}
          </>
        );
      },
    },
    {
      title: "Thêm",
      dataIndex: "add",
      render: (value) => {
        return (
          <>
            {value ? (
              <FcCheckmark />
            ) : (
              <MdOutlineClose style={{ color: "red" }} />
            )}
          </>
        );
      },
    },
    {
      title: "Sửa",
      dataIndex: "edit",
      render: (value) => {
        return (
          <>
            {value ? (
              <FcCheckmark />
            ) : (
              <MdOutlineClose style={{ color: "red" }} />
            )}
          </>
        );
      },
    },
    {
      title: "Xóa",
      dataIndex: "delete",
      render: (value) => {
        return (
          <>
            {value ? (
              <FcCheckmark />
            ) : (
              <MdOutlineClose style={{ color: "red" }} />
            )}
          </>
        );
      },
    },
    {
      title: "Hành động",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <>
            {isPermission["edit"] && (
              <Tooltip title="Sửa phân quyền" showArrow>
                <EditPermission permission={record} success={onSuccess} />
              </Tooltip>
            )}
            {isPermission["delete"] && (
              <Popconfirm
                onConfirm={() => handleDelete(record)}
                title="Bạn có chắc muốn xóa?"
              >
                <span>
                  <AiFillDelete
                    style={{
                      color: "red",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  />
                </span>
              </Popconfirm>
            )}
          </>
        );
      },
    },
  ];

  const handleDelete = async (value) => {
    let res = await deletePermission(value?._id);
    if (res.success) {
      toast.success("Xóa quyền hạn thành công!");
      onSuccess();
    } else {
      toast.error("Xóa quyền hạn không thành công");
    }
  };

  return (
    <React.Fragment>
      <Toaster />
      <LoadingBar color="red" ref={refLoading} />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Users" pageTitle="Users Permission" />
          <Form>
            <Row className="mb-3">
              <Col lg="6">
                <div>
                  <Row>
                    <Col lg={6}>
                      <FormGroup>
                        <Label className="mb-1" for="username">
                          Quyền
                        </Label>
                        <Select
                          size="large"
                          name="username"
                          placeholder="Chọn Quyền"
                          style={{ width: "100%" }}
                          onChange={handleChangeRole}
                          defaultValue={role}
                          value={role}
                        >
                          {roles.map((_role) => {
                            return (
                              <Option key={_role.name} value={_role._id}>
                                {_role.name}
                              </Option>
                            );
                          })}
                        </Select>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            {isPermission["add"] && (
              <ModalAddPermission
                role={roles?.find((item) => item._id === role)}
                permissionList={permissionList}
                success={onSuccess}
              />
            )}

            <Row
              style={{
                alignItems: "start",
                display: "flex",
                flexFlow: "column",
              }}
            >
              <Table
                loading={loading}
                style={{ width: "100%", marginTop: "10px" }}
                columns={columns}
                dataSource={permissionList}
                pagination={false}
              />
            </Row>
          </Form>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UsersPermission;
