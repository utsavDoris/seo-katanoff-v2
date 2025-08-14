const HeadingTitle = ({ headingClassName, sectionName, description }) => {
  return (
    <div className="flex justify-center text-center">
      <div className="flex flex-col md:px-6 relative">
        <h2
          className={`text-primary font-belleza leading-none tracking-normal md:text-4xl xl:text-5xl 3xl:text-7xl text-4xl ${headingClassName}`}
        >
          {sectionName}
        </h2>
        {description && (
          <div className="flex justify-center text-center pt-4 xl:pt-8">
            <p className="text-gray text-sm w-full 2xl:w-[60%] md:text-lg xl:text-[22px] xl:w-[85%]">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeadingTitle;
