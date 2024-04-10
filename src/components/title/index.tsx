interface ITitleProps {
  text: string;
  className?: string;
}

export const Title: React.FC<ITitleProps> = ({ text, className }) => {
  return <h2 className={className}>{text}</h2>;
};
