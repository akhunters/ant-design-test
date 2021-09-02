import React, { useState } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import { Checkbox } from "antd";

const CustomDropDown = () => {
    const [items, setItems] = useState([]);
  
  function handleChange(e) {
    console.log(`selected  ${e.target.value}`);
   console.log(e.target.checked)
   if(e.target.checked)
//    const newItems = [...items];
//    newItems.push(e.target.value)
//    setItems(newItems)
    setItems(value => [...value, e.target.value])
    else{
        setItems(value => value.filter(el=> el !== e.target.value))
    }
  }
  
  return (
    <div>
      <Select
        mode='multiple'
        allowClear
        style={{ width: "100%" }}
        placeholder='Please select'
        showArrow={true}
        value={items}
        onDeselect={value => setItems(it => it.filter(el=> el !== value))
        }
        dropdownRender={(menu) => (
          <React.Fragment>
            {[1, 2, 3, 4, 5].map((e) => {
              return (
                <div style={{ paddingLeft: "8px", paddingBottom: "2px" }}>
                  <Checkbox onChange={handleChange} value={e} checked={items.includes(e)}>
                    {e}
                  </Checkbox>
                </div>
              );
            })}
          </React.Fragment>
        )}></Select>
    </div>
  );
};

export default CustomDropDown;
