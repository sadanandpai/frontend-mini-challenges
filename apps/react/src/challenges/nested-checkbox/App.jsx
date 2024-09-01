import { useState } from 'react';
import CheckBoxList from './CheckBoxList';
import { checkboxList } from './constants';
import styles from './styles.module.css';

const NestedCheckbox = () => {
  const [checkList, setCheckList] = useState(checkboxList);

  const toggleAllChildNodes = (list, value) => {
    for (let i = 0; i < list.length; i++) {
      list[i].checked = value;
      toggleAllChildNodes(list[i].children, value);
    }
  };

  const dfs = (list, id, value, isFound) => {
    if (list.length === 0) return isFound;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list[i].checked = value;
        isFound = true;
        toggleAllChildNodes(list[i].children, value);
        break;
      }
      isFound = dfs(list[i].children, id, value, isFound);
      if (isFound) break;
    }
    return isFound;
  };

  const getActiveChildCount = (list) => {
    if (list.length === 0) return 0;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      // If it's checked then increase the count.
      if (list[i].checked) {
        count += 1;
      }

      // If there is no children for the node then we skip the rest of the code.
      if (list[i].children.length === 0) continue;

      // we need to get the active child count.
      let childCount = getActiveChildCount(list[i].children);

      // If count is not equal then we need to un-check the parent node else we need to check the parent node.
      if (childCount !== list[i].children.length) {
        count = list[i].checked ? count - 1 : count;
        list[i].checked = false;
      } else {
        count = list[i].checked ? count : count + 1;
        list[i].checked = true;
      }
    }
    return count;
  };

  const handleChange = (id, value) => {
    let clone = JSON.parse(JSON.stringify(checkList));
    let isFound = false;
    let parentIndex = 0;
    /**
     * Iterate the root node and the child node until we find the target node.
     * If we found the target node we need to make all the children of the target flag as the selected value ( true | false ).
     */
    for (let i = 0; i < clone.length; i++) {
      if (clone[i].id === id) {
        clone[i].checked = value;
        isFound = true;
        parentIndex = i;
        toggleAllChildNodes(clone[i].children, value);
        break;
      }

      // If the target node is not a root. We need to check all the child nodes.
      isFound = dfs(clone[i].children, id, value, false);

      // If we found the targetNode we no need to check the rest of the node.
      if (isFound) {
        parentIndex = i;
        break;
      }
    }

    /**
     * Now we want to check/unCheck the parent node based on the child node values.
     * If all the child nodes are check we need to make the parent node check.
     * if any one of the child nodes are unChecked we need to make the parent node un-check.
     */
    const childCount = getActiveChildCount(clone[parentIndex].children);
    if (clone[parentIndex].children.length > 0) {
      if (childCount !== clone[parentIndex].children.length) {
        clone[parentIndex].checked = false;
      } else {
        clone[parentIndex].checked = true;
      }
    }

    // Finally set the updated list.
    setCheckList(clone);
  };

  return (
    <div className={styles.nested_checkbox_wrapper}>
      {<CheckBoxList childCheckBoxList={checkList} onCheckBoxChange={handleChange} />}
    </div>
  );
};

export default NestedCheckbox;
