interface BackCoverProps {
  children: React.ReactNode;
}

const BackCover: React.FC<BackCoverProps> = ({ children }) => {
  return (
    <div className="bg-bgImg min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[90vh] bg-no-repeat bg-cover shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)] bg-center px-4">
      <div className="bg-[#00000054] min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[90vh] w-full absolute top-0 left-0 z-0"></div>
      {children}
    </div>
  );
};

export default BackCover;
