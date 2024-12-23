interface BackCoverProps {
  children: React.ReactNode;
}

const BackCover: React.FC<BackCoverProps> = ({ children }) => {
  return (
    <div className="relative bg-bgImg min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[90vh] bg-no-repeat bg-cover shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)] bg-center w-full">
      <div className="absolute inset-0 bg-[#000000b0] opacity-50"></div>
      {children}
    </div>
  );
};

export default BackCover;
