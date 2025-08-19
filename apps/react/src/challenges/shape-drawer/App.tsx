import { useEffect, useRef, useState } from 'react';

import styles from './style.module.scss';

enum Shape {
  Circle = 'circle',
  Square = 'square',
}

interface Circle {
  x: number;
  y: number;
  color: string;
  size: number;
  shape: Shape;
}

const App = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const [circles, setCircles] = useState<Circle[]>([]);
  const [undoCount, setUndoCount] = useState(0);
  const [redoCount, setRedoCount] = useState(0);
  const [color, setColor] = useState('#0000FF');
  const [shape, setShape] = useState<Shape>(Shape.Circle);
  const [size, setSize] = useState(25);
  const [statusMessage, setStatusMessage] = useState('');
  const statusRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Announce status changes to screen readers
  useEffect(() => {
    if (statusRef.current) {
      statusRef.current.focus();
    }
  }, [statusMessage]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    setDisplayCount(displayCount + 1);
    const newCircle = { x, y, color, size, shape };
    setCircles((prevCircles) => [...prevCircles.slice(0, displayCount), newCircle]);
    setUndoCount((prev) => prev + 1);
    setRedoCount(0);
    setStatusMessage(`Added ${shape} at position (${Math.round(x)}, ${Math.round(y)})`);
  };

  const handleUndo = () => {
    if (undoCount > 0) {
      setDisplayCount((prev) => prev - 1);
      setUndoCount((prev) => prev - 1);
      setRedoCount((prev) => prev + 1);
      setStatusMessage('Undo successful');
    } else {
      setStatusMessage('Nothing to undo');
    }
  };

  const handleRedo = () => {
    if (redoCount > 0) {
      setDisplayCount((prev) => prev + 1);
      setUndoCount((prev) => prev + 1);
      setRedoCount((prev) => prev - 1);
      setStatusMessage('Redo successful');
    } else {
      setStatusMessage('Nothing to redo');
    }
  };

  const handleClear = () => {
    setCircles([]);
    setUndoCount(0);
    setRedoCount(0);
    setDisplayCount(0);
    setStatusMessage('All shapes cleared');
    // Focus back to the drawing area after clear
    if (containerRef.current) {
      containerRef.current.focus();
    }
  };

  return (
    <>
      <div className={styles.controls} role="toolbar" aria-label="Drawing controls">
        <button
          onClick={handleClear}
          aria-label="Clear all shapes"
          className={styles.controlButton}
        >
          Clear
        </button>
        <button
          onClick={handleUndo}
          disabled={undoCount === 0}
          aria-label={`Undo (${undoCount} ${undoCount === 1 ? 'action' : 'actions'} available)`}
          className={styles.controlButton}
        >
          Undo
        </button>
        <button
          onClick={handleRedo}
          disabled={redoCount === 0}
          aria-label={`Redo (${redoCount} ${redoCount === 1 ? 'action' : 'actions'} available)`}
          className={styles.controlButton}
        >
          Redo
        </button>
        <div className={styles.controlGroup}>
          <label htmlFor="shape-select" className={styles.visuallyHidden}>
            Shape
          </label>
          <select
            id="shape-select"
            value={shape}
            onChange={(e) => {
              setShape(e.target.value as Shape);
              setStatusMessage(`Selected shape: ${e.target.value}`);
            }}
            aria-label="Select shape type"
            className={styles.select}
          >
            <option value="circle">Circle</option>
            <option value="square">Square</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label htmlFor="color-picker" className={styles.visuallyHidden}>
            Color
          </label>
          <input
            id="color-picker"
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              setStatusMessage(`Selected color: ${e.target.value}`);
            }}
            aria-label="Select color"
            className={styles.colorInput}
          />
        </div>
        <div className={styles.controlGroup}>
          <label htmlFor="size-slider" className={styles.visuallyHidden}>
            Size: {size}px
          </label>
          <input
            id="size-slider"
            type="range"
            min="10"
            max="50"
            value={size}
            onChange={(e) => {
              setSize(Number(e.target.value));
              setStatusMessage(`Size: ${e.target.value}px`);
            }}
            aria-valuemin={10}
            aria-valuemax={50}
            aria-valuenow={size}
            className={styles.rangeInput}
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className={styles.container}
        onClick={handleClick}
        role="application"
        aria-label="Drawing area"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            handleUndo();
          } else if (e.key === 'y' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            handleRedo();
          }
        }}
      >
        {circles.length === 0 && (
          <div className={styles.instructions}>
            Click anywhere in this area to add a {shape}. Use Ctrl+Z to undo and Ctrl+Y to redo.
          </div>
        )}
        {circles.map(({ x, y, color, size, shape: circleShape }, index) => {
          if (index < displayCount) {
            return (
              <div
                key={index}
                role="img"
                aria-label={`${circleShape} at position (${Math.round(x)}, ${Math.round(y)})`}
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  backgroundColor: color,
                  width: `${size}px`,
                  height: `${size}px`,
                }}
                className={circleShape === Shape.Circle ? styles.circle : styles.square}
              />
            );
          }
          return null;
        })}
      </div>

      {/* Status message for screen readers */}
      <div
        ref={statusRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={styles.visuallyHidden}
      >
        {statusMessage}
      </div>
    </>
  );
};

export default App;
