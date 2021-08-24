import React, { FormEvent } from "react";
import { useState } from "react";
import { addDream } from "../../api/dreams";
import { IMainDream } from "./type";
type TProps = {
  setActive: any;
};
export const PopUpDream: React.FC<TProps> = ({ setActive }) => {
  const [dataDream, setDataDream] = useState<IMainDream>({
    name: "",
    nameChild: "",
    desc: "",
    needBalance: "",
  });
  const [message, setMessage] = useState<string | null>(null);
  const changeHandler = (
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ) => {
    const name: string = e.currentTarget.name;
    const val: string = e.currentTarget.value;
    setDataDream((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dataDream.name === "") {
      setMessage('Поле "Название мечты" не заполнено');
      return;
    }
    if (dataDream.nameChild === "") {
      setMessage('Поле "Имя ребенка" не заполнено');
      return;
    }
    if (dataDream.needBalance === "") {
      setMessage('Поле "Необходимая сумма" не заполнено');
      return;
    }
    if (dataDream.desc === "") {
      setMessage('Поле "Описание" не заполнено');
      return;
    }
    const data = {
      name: dataDream.name,
      desc_dream: dataDream.desc,
      balance: dataDream.needBalance,
      nameChild: dataDream.nameChild,
    };
    addDream(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="pop-up-dream">
      <div className="bg-lock" onClick={setActive}></div>
      <form className="pop-wrapper-add-dream" onSubmit={submitHandler}>
        <div className="top-line">
          <h2 className="h2">Создать мечту</h2>
        </div>
        <div className="err-wrapper">{message ? <p>{message}</p> : ""}</div>
        <div className="input-wrapper">
          <input
            type="text"
            onChange={changeHandler}
            placeholder="Название мечты"
            name="name"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            onChange={changeHandler}
            placeholder="Имя ребенка"
            name="nameChild"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            onChange={changeHandler}
            placeholder="Необходимая сумма"
            name="needBalance"
          />
        </div>
        <div className="input-wrapper">
          <textarea
            name="desc"
            cols={30}
            rows={10}
            onChange={changeHandler}
            placeholder="Введите описание вашей мечты"
          ></textarea>
        </div>
        <div className="input-wrapper">
          <span>
            Загрузка картинки пока не доступна, просим прощения за неудобства
          </span>
        </div>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};
