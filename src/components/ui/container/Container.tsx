interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`max-w-[1400px] my-0 mx-auto px-4 ${className}`}>{children}</div>;
};

export default Container;
