const MainSection = ({ children }) => {
  return (
    <div className="relative bg-zinc-100 dark:bg-background w-full md:w-7/12 xl:w-6/12 flex flex-col h-full">
      {children}
    </div>
  );
};

export default MainSection;
