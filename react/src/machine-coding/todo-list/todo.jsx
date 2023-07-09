import React, { useState } from "react";

import { motion } from "framer-motion";
import styles from "./todo.module.scss";

const Todo = () => {
  const [val, setVal] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editvalu, setEditvalu] = useState("");
  const [editval, setEditval] = useState("");

  //Submit the todo into List.
  const check = (e) => {
    e.preventDefault();
    console.log(val);
    const list1 = list;
    list1.push(val);
    setList(list1);
    console.log(list);
    setVal("");
  };

  //Submit the Updated Value
  const handleEditSubmit = (e) => {
    e.preventDefault();
    var data = list;
    console.log(editval);
    console.log(editvalu);
    data = data.map((item) => (item === editval ? editvalu : item));
    setList(data);
    setIsEditing(false);
    console.log(data);
  };

  //Edit The particular list item.
  const handleEditClick = (ele) => {
    setIsEditing(true);
    setEditval(ele);
    setEditvalu(ele);
    console.log(editval);
  };

  // Deleting the Particular List item.
  const handleDeleteClick = (id) => {
    const removeItem = list.filter((todo) => {
      return todo !== id;
    });
    setList(removeItem);
  };

  return (
    <motion.div
      className={styles.App}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="text1"
            value={editvalu}
            placeholder="Enter your todo"
            onChange={(e) => setEditvalu(e.target.value)}
          />
          <motion.button
            type="submit"
            className="col"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            Update
          </motion.button>
        </form>
      ) : (
        <form onSubmit={check}>
          <motion.input
            type="text"
            name="text1"
            value={val}
            placeholder="Enter your todo"
            onChange={(e) => setVal(e.target.value)}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          />
          <motion.button
            type="submit"
            className="col"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            Submit
          </motion.button>
        </form>
      )}
      {list.map((ele) => (
        <motion.div
          className={styles.dis}
          key={ele}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          <span>{ele}</span>
          <div className="listb1">
            <motion.button
              style={{ backgroundColor: "green", borderRadius: "5px" }}
              onClick={() => handleEditClick(ele)}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              edit
            </motion.button>
            <motion.button
              style={{
                backgroundColor: "red",
                marginLeft: "10px",
                borderRadius: "5px",
              }}
              onClick={() => handleDeleteClick(ele)}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              delete
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Todo;
