import React from 'react';
import styles from './app.module.css';

const obj = `
                    **Main Functionalities**


        **Copy Block level(div) elements to clipboard**
function copyToClipboard(element) {
    // Create a range object that selects the element \n
    // to be copied.
    const range = document.createRange();
    range.selectNode(element);
  
    // clear current selection
    window.getSelection().removeAllRanges(); 
    
    // Selects the given range.
    window.getSelection().addRange(range);
  
    // Copy the selection to the clipboard.
    document.execCommand('copy');
  
    // Remove the range from the selection.
    selection.removeAllRanges();
}


        **Filter emojis based on search value**
emojis.filter((icon) => {
    icon.toLowerCase().includes(searchValue.toLowerCase())
})


        **axios to call API**
axios.get(__url__)
    .then(response => {
        // Handle response
    });
`;

const Code = () => {
  return (
    <div className={styles.container}>
    <pre>
      <code>
        {obj.split('\n').map((line, index) => {
          if (line.trim().startsWith('//')) {
            return <span key={index} className={styles.comments}>{line}</span>;
          }
          else if(line.trim().startsWith('**')){
            return <b key={index}>{line}</b>;  
          }
          return <div key={index}>{line}</div>;
        })}
      </code>
    </pre>
    </div>
  );
};

export default Code;