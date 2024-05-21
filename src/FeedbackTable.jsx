import React, { useEffect, useState } from "react";
import { Table, Checkbox, Button } from "antd";
import { Input, Space } from "antd";
import { NavLink } from "react-router-dom";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import "./App.css";

const FeedbackTable = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("feedbackData");
    if (storedData) {
      setFeedbackData(JSON.parse(storedData));
    }
  }, []);

  const handleCheckboxChange = (record) => {
    setSelectedRows((prevSelectedRows) => {
      const isSelected = prevSelectedRows.some((row) => row.key === record.key);
      if (isSelected) {
        return prevSelectedRows.filter((row) => row.key !== record.key);
      } else {
        return [...prevSelectedRows, record];
      }
    });
  };

  const handleDelete = () => {
    const newData = feedbackData.filter(
      (item, index) => !selectedRows.some((row) => row.key === index)
    );
    setFeedbackData(newData);
    setSelectedRows([]);
    localStorage.setItem("feedbackData", JSON.stringify(newData)); // Update local storage
  };

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectedRows([...dataWithCheckboxes]);
    } else {
      setSelectedRows([]);
    }
  };

  const columns = [
    {
      title: <Checkbox onChange={handleSelectAllChange} />,
      dataIndex: "checkbox",
      align: "center",
      width: 50,
      fixed: "left",
      render: (_, record) => (
        <Checkbox
          checked={selectedRows.some((row) => row.key === record.key)}
          onChange={() => handleCheckboxChange(record)}
        />
      ),
    },
    {
      title: "Form Details",
      dataIndex: "formData",
      key: "formData",
      render: () => <a href=""> View Details </a>,
    },
    { title: "Customer Name", dataIndex: "customerName", key: "customerName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    {
      title:
        "Please rate the quality of the service you received from your host:",
      dataIndex: "serviceQuality",
      key: "serviceQuality",
    },
    {
      title: "Please rate the quality of your beverage:",
      dataIndex: "beverageQuality",
      key: "beverageQuality",
    },
    {
      title: "Was our restaurant clean?",
      dataIndex: "cleanliness",
      key: "cleanliness",
    },
    {
      title: "Please rate your overall dining experience:",
      dataIndex: "overallExperience",
      key: "overallExperience",
    },
  ];

  const dataWithCheckboxes = feedbackData.map((item, index) => ({
    ...item,
    key: item.id || index,
  }));

  return (
    <>
      <div style={{ backgroundColor: "" }}>
        <div className="feedback-table-container">
          <span>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              Aromatic Bar
            </span>
            <br />
            <span>{feedbackData.length} records found. 3 filters applied</span>
            <span style={{ float: "right" }}>
              <Space style={{ marginBottom: 16 }}>
                <Input
                  placeholder="Search..."
                  prefix={<SearchOutlined />}
                  style={{ width: 200 }}
                />
                <Button icon={<ReloadOutlined />} />
                <Button type="primary" style={{ backgroundColor: "green" }}>
                  Add New
                </Button>
              </Space>
            </span>
          </span>
          <div style={{ textAlign: "center" }}>
            <Table
              dataSource={dataWithCheckboxes}
              columns={columns}
              scroll={{ x: 2400 }}
              pagination={false}
              bordered
              className="feedback-table"
              headerClassName="feedback-table-header"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "50px",
          paddingTop: "10px",
          boxShadow: "0px 0px 10px 0px #ccc",
        }}
      >
        <div style={{ float: "right", paddingRight: "20px" }}>
          <Button
            onClick={handleDelete}
            style={{ backgroundColor: "#E64B87", color: "#fff" }}
          >
            Delete
          </Button>
        </div>
      </div>
      <div className="footer">
        <NavLink to="/" style={{ marginRight: "10px" }}>
          Tab1
        </NavLink>
        <NavLink to="/feedback">Tab2</NavLink>
      </div>
    </>
  );
};

export default FeedbackTable;
