import React from "react";
import { Input, Select, Table } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Nextpage() {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  const data = [
    {
      name: "heizal",
      age: 10,
      address: "India",
      key: 1,
    },
    {
      name: "Rusta",
      age: 27,
      address: "Pakistan",
      key: 2,
    },
    {
      name: "Seema",
      age: 32,
      address: "Nepal",
      key: 3,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Graduated",
      key: "graduated",
      render: (text, record) => {
        return <p>{record.age > 20 ? "True" : "False"}</p>;
      },
    },
  ];

  const pageStyle = {
    backgroundImage: "url('https://www.example.com/path/to/your/image.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="Main" style={pageStyle}>
      <div className="App-header">
        <Input.Search
          placeholder="Name"
          maxLength={10}
          prefix={<UserOutlined />}
          allowClear
        />
      </div>
      <div className="fruits-header">
        <Select
          mode="multiple"
          maxTagCount={4}
          allowClear
          placeholder="Select an option"
          style={{ width: "50%" }}
        >
          {options.map((option, index) => (
            <Select.Option key={index} value={option}>
              {option}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className="table-header">
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
}

export default Nextpage;
