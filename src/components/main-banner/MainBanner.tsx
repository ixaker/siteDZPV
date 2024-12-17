import * as Shared from '@/shared';

const MainBanner: React.FC<Shared.HomeComponentProps> = (componentProps) => {
  const translatiomsPage = componentProps.translationsPage;
  return (
    <section className="relative ">
      <Shared.BackCover>
        <div className="flex gap-10 flex-col-reverse pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px] lg:flex-row lg:justify-between lg:ap-0 px-4">
          <div className="flex flex-col items-center lg:items-start gap-8 lg:block min-h-[inherit] pb-6 relative z-10">
            <h1 className="text-[20px] text-center lg:text-start sm:text-[40px] md:text-[55px] lg:text-[48px] xl:text-[70px] font-semibold max-w-full md:max-w-[70%] text-white">
              {translatiomsPage.title}
            </h1>
            <Shared.ButtonSubmitDrawing
              lang={componentProps.lang}
              translations={componentProps.translations}
            />
          </div>
          <div className="hidden sm:block">
            <Shared.Navigation {...componentProps} />
          </div>
        </div>
      </Shared.BackCover>
    </section>
  );
};

export default MainBanner;
