import React from "react";
type TProps = {
  setActive: any;
};
export const PopUpDream: React.FC<TProps> = ({ setActive }) => {
  return (
    <div className="pop-up-dream">
      <div className="bg-lock" onClick={setActive}></div>
      <form className="pop-wrapper-add-dream">
        <div className="top-line">
          <h2 className="h2">Создать мечту</h2>
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Название мечты" />
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Необходимая сумма" />
        </div>
        <div className="input-wrapper">
          <textarea
            name="desc"
            cols={30}
            rows={10}
            placeholder="Введите описание вашей мечты"
          ></textarea>
        </div>
        <div className="input-wrapper">
          <span>
            Загрузка картинки пока не доступна, просим прощения за неудобства
          </span>
        </div>
        <button type="submit">Создать </button>
      </form>
    </div>
  );
};
