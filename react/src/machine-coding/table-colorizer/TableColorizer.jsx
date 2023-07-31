import React, { useRef, useState } from 'react';
import style from "./table-colorizer.module.css";

const TableColorizer = () => {
    const [colorArray, setColorArray] = useState([]);

    const colRef = useRef();

    const arr = Array.apply(null, Array(9)).map(function (x, i) { return i; });

    const handleClick = (e) => {
        e.preventDefault();
        if (parseInt(colRef.current.value) > 9 || parseInt(colRef.current.value) < 0) {
            alert("enter Valid Number");
        }
        if (colorArray.indexOf(parseInt(colRef.current.value)) === -1) {
            setColorArray((prev) => [...prev, parseInt(colRef.current.value)])
        }
    }
    return (
        <div className={style['color']}>
            <form className={style['form']}>
                <input type="number" className={style["numberInput"]} ref={colRef} />
                <div className="buttons">
                    <input type="submit" value="Color Me" onClick={handleClick} />
                    <button className={style['clearBtn']} onClick={(e) => {e.preventDefault(); setColorArray([]) }}>Clear Me</button>
                </div>
            </form>
            <div className={style["containers"]}>
                {arr.map((e, p) => {
                    return (<div key={p} className={colorArray.indexOf(e + 1) !== -1 ? style["container-color"] : style["container"]}>{e + 1}</div>)
                })}
            </div>

        </div>
    )
}

export default TableColorizer
