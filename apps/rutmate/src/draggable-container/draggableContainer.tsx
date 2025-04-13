import s from './draggableContainer.module.scss';
import { JSX, useState, useEffect } from 'react';
interface DraggableContainerProps {
  children: React.ReactNode;
}
export function DraggableContainer({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState({y: 100 }); // Начальная позиция
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({y: e.clientY - offset.y });
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setOffset({ y: e.clientY - position.y });
  };

  return (
    <div
      className={s.dragCont}
      style={{
        position: "relative",
        top: `${position.y}px`,
      }}

    >
      <div className={s.dragCont__buttonWrap}>
        <div onMouseDown={handleMouseDown} className={s.dragCont__button}>

        </div>
      </div>
      {children}
    </div>
  );
}

export default DraggableContainer;
