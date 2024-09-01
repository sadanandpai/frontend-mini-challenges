/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import Checkbox from './CheckBox';
import styles from './styles.module.css';

const CheckBoxList = (props) => {
  const { childCheckBoxList, onCheckBoxChange } = props;

  return (
    <Fragment>
      {childCheckBoxList.map((childBox) => (
        <div key={childBox.id} className={styles.nested_checkbox_child}>
          <Checkbox
            id={childBox.id}
            label={childBox.label}
            isChecked={childBox.checked}
            onCheckBoxChange={onCheckBoxChange}
          />
          {childBox.children.length > 0 && (
            <CheckBoxList
              childCheckBoxList={childBox.children}
              onCheckBoxChange={onCheckBoxChange}
            />
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default CheckBoxList;
