import React, { useState } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import { Checkbox } from "antd";
const CustomDropDown = () => {
  const [items, setItems] = useState([]);

  const dropDownItem = [
    1,
    2,
    3,
    4,
    5,
    "car",
    "bike",
    "plane",
    "truck",
    "car",
    "bike",
    "plane",
    "truck",
    "car",
    "bike",
    "plane",
    "truck",
  ];

  function handleChange(e) {
    console.log(`selected  ${e.target.value} `);
    console.log(e.target.checked);
    if (e.target.checked)
      //    const newItems = [...items];
      //    newItems.push(e.target.value)
      //    setItems(newItems)
      setItems((value) => [...value, e.target.value]);
    else {
      setItems((value) => value.filter((el) => el !== e.target.value));
    }
  }

  return (
    <div>
      <Select
        mode='multiple'
        style={{ width: "100%", height: "30%" }}
        placeholder='Please select'
        showArrow={true}
        value={items}
        onDeselect={(value) =>
          setItems((it) => it.filter((el) => el !== value))
        }
        listItemHeight={10}
        listHeight={200}
        dropdownRender={(menu) => menu}>
        {dropDownItem.map((e, idx) => (
          <div key={idx}>
            <Checkbox
              onChange={handleChange}
              value={e}
              checked={items.includes(e)}>
              {e}
            </Checkbox>
          </div>
        ))}
      </Select>
    </div>
  );
};

export default CustomDropDown;
