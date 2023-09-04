export const HeroBackground = () => {
  return (
    <div className="absolute -z-10 flex top-0 h-full w-full ">
      <div className="w-[49%] xl:w-[55%] bg-black overflow-hidden relative">
        <p className="absolute right-[-113px] md:right-[-136px] xl:right-[-40px] top-[-76px] md:top-[-214px] xl:top-[-153px] opacity-5 text-[482px] md:text-[798px] xl:text-[980px] leading-[482px] md:leading-[976px] -tracking-[0.12em] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#d9d9d900] from-30% to-white">
          IM
        </p>
      </div>
      <div className="bg-accent  w-[51%] xl:w-[45%]"></div>
    </div>
  );
};
