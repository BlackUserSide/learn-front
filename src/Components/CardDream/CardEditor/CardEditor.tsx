import React from "react";
import { FormEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import child from "../../../images/no-image.png";
import { NorificationConstructor } from "../../../ui/NotificationPop/NotificationConstructor";
type Props = {
  countProcent: () => number;
  dataDream: any;
  saveChanges: (res: boolean, data: any) => void;
};
export const CardEditor: React.FC<Props> = ({
  countProcent,
  dataDream,

  saveChanges,
}) => {
  const [messageErr, setMessageErr] = useState<string>("");
  const [dataEditor, setDataEditor] = useState<any>({});
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    setDataEditor(dataDream);
  }, [dataDream]);
  const changeHandler = (
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;
    setDataEditor((prev: any) => ({
      ...prev,
      [name]: val,
    }));
  };
  useEffect(() => {
    if (dataDream) {
      if (dataDream.balance !== 0) {
        setMessageErr(
          "Невозомжно редактировать мечту с положительным болансом"
        );
        setActive(true);
        setTimeout(() => {
          saveChanges(false, dataEditor);
        }, 3500);
      }
      if (dataEditor.name === "") {
        setMessageErr("Имя не может быть пустое");
      }
    }
  }, [dataDream, dataEditor, saveChanges]);

  return (
    <div className="card-editor-main-wrapper">
      <div className="items_dream">
        <div className="item_dream">
          <h1>Редактирование Карточки ребенка</h1>
        </div>
        <div className="item_dream">
          <img src={child} alt="" />
        </div>
        <div className="item_dream">
          <div className="line-progress">
            <div className="line" style={{ width: `${countProcent()}%` }}></div>
          </div>
          <div className="text-progress">
            <p>
              Собрано: <span>{dataEditor.balance} MYC</span> /{" "}
              {dataEditor.fullBalance}MYC.
            </p>
          </div>
        </div>
      </div>
      <div className="items_dream">
        <div className="item_dream">
          <p>Нажмите на красную область для Редактирования</p>
          <div className="header-block">
            <input
              type="text"
              name="name"
              defaultValue={dataEditor.name}
              onChange={changeHandler}
              disabled={active}
            />
          </div>
        </div>
        <div className="item_dream">
          <p>Нажмите ниже для редакирования</p>
          <textarea
            name="desc_dream"
            cols={30}
            rows={5}
            onChange={changeHandler}
            defaultValue={dataEditor.desc_dream}
            disabled={active}
          ></textarea>
        </div>
        <div className="item_dream_btn">
          <div className="btn_update">
            <span onClick={() => saveChanges(true, dataEditor)}>Сохранить</span>
          </div>
        </div>
      </div>
      {messageErr !== "" ? (
        <NorificationConstructor>
          <h3 className="h3">{messageErr}</h3>
        </NorificationConstructor>
      ) : (
        ""
      )}
    </div>
  );
};
//TODO Закончить сохранение мечты! Неизвестно что с беком
