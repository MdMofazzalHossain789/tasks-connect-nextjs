const MainSection = ({ children }) => {
  return (
    <div className="relative bg-foreground/5 w-full md:w-7/12 xl:w-6/12 flex flex-col h-full">
      {children}
    </div>
  );
};

export default MainSection;
