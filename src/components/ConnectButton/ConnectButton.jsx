import data from 'data/data.json';
import Icon from 'public/icons/connect.svg';

export const ConnectButton = () => {
  return (
    <button
      type="button"
      aria-label="Кнопка Зв'язатися"
      className="flex items-center gap-2 m-0 p-0"
    >
      <Icon />
      <p className="text-accent text-font16 font-formular font-bold leading-[16px]">
        {data.connectBtn}
      </p>
    </button>
  );
};
