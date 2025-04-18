import s from './verticalContainer.module.scss';
import Question from '../question/question';
interface ContainerProps {
  overflow?: string;
  children: React.ReactNode;
}
export function VerticalContainer({children, overflow='hidden'}: ContainerProps) {
  return (
    <div style={{overflow: overflow}} className={s.container}>
      {children}
    </div>
  );
}

export default VerticalContainer;
