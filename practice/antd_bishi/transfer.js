// 仿antd穿梭框
import React, { useState } from "react";
import "./styles.css";

export default function Transfer(props) {
  const [source, setSource] = useState(props.dataSource);
  const [target, setTarget] = useState([]);
  const [sourceSelectedKeys, setSourceSelectedKeys] = useState([]);
  const [targetSelectedKeys, setTargetSelectedKeys] = useState([]);

  const onSelectChange = (key, type, e) => {
    if (type === "source") {
      setSourceSelectedKeys([...sourceSelectedKeys, key]);
    } else {
      setTargetSelectedKeys([...targetSelectedKeys, key]);
    }
  };

  const moveToRight = () => {
    const dataSourceCpy = [...source];
    const moveItem = dataSourceCpy.filter((item) =>
      sourceSelectedKeys.includes(item.key)
    );
    const newSource = dataSourceCpy.filter(
      (item) => !sourceSelectedKeys.includes(item.key)
    );
    setTarget([...moveItem, ...target]);
    setSource(newSource);
    setSourceSelectedKeys([]);
  };

  const moveToLeft = () => {
    const targetCpy = [...target];
    const moveItem = targetCpy.filter((item) =>
      targetSelectedKeys.includes(item.key)
    );
    const newTarget = targetCpy.filter(
      (item) => !targetSelectedKeys.includes(item.key)
    );
    setTarget(newTarget);
    setSource([...moveItem, ...source]);
    setTargetSelectedKeys([]);
  };

  const handleTransfer = (type) => {
    if (type === "right") {
      moveToRight();
    } else {
      moveToLeft();
    }
  };

  return (
    <div className="container">
      <div className="dataSource">
        {source.map((item) => {
          return (
            <div key={item.key}>
              <input
                type="checkbox"
                name={item.title}
                onChange={(e) => {
                  onSelectChange(item.key, "source", e);
                }}
              />
              <label htmlFor={item.title}>{item.title}</label>
            </div>
          );
        })}
      </div>
      <div className="operation">
        <button
          onClick={() => {
            handleTransfer("right");
          }}
        >
          {">"}
        </button>
        <button
          onClick={() => {
            handleTransfer("left");
          }}
        >
          {"<"}
        </button>
      </div>
      <div className="target">
        {target.map((item) => {
          return (
            <div key={item.key}>
              <input
                type="checkbox"
                name={item.title}
                onChange={(e) => {
                  onSelectChange(item.key, "target", e);
                }}
              />
              <label htmlFor={item.title}>{item.title}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
