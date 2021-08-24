import React from "react";
import "./dream.sass";
import child from "../../images/no-image.png";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDreamId } from "../../api/dreams";
import { useState } from "react";
import { getUser } from "../../api/users";
import { HeaderBlack } from "../Section/HeaderBlack";
import { CardEditor } from "./CardEditor/CardEditor";
export const DreamCard: React.FC = () => {
  const params: any = useParams();
  const [dataDream, setDataDream] = useState<any>({});
  const [roleUser, setRoleUser] = useState<number>();
  const [activeEditor, setActiveEditor] = useState<boolean>(false);

  useEffect(() => {
    getDreamId(params.id)
      .then((res) => {
        switch (res.status) {
          case 200:
            setDataDream(res.data[0]);
            break;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    getUser()
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              setRoleUser(res.data.role);
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  }, [params]);
  const countProcent = () => {
    let procent = (+dataDream.balance * 100) / +dataDream.fullBalance;

    return procent;
  };
  const saveChanges = (res: boolean, data: any) => {
    if (res) {
      return;
    }
    setActiveEditor(false);
  };
  return (
    <>
      {activeEditor ? (
        <CardEditor
          countProcent={countProcent}
          dataDream={dataDream}
          saveChanges={saveChanges}
        />
      ) : (
        <>
          <HeaderBlack />
          {dataDream.length !== {} ? (
            <div className="dream-main">
              <div className="items_dream">
                <div className="item_dream">
                  <h1>Карточка ребенка</h1>
                </div>
                <div className="item_dream">
                  <img src={child} alt="" />
                </div>
                <div className="item_dream">
                  <div className="line-progress">
                    <div
                      className="line"
                      style={{ width: `${countProcent()}%` }}
                    ></div>
                  </div>
                  <div className="text-progress">
                    <p>
                      Собрано: <span>{dataDream.balance} MYC</span> /{" "}
                      {dataDream.fullBalance}MYC.
                    </p>
                  </div>
                </div>
              </div>
              <div className="items_dream">
                <div className="item_dream">
                  <div className="header-block">
                    <h3>{dataDream.name}</h3>
                  </div>
                </div>
                <div className="item_dream">
                  <p>{dataDream.desc_dream}</p>
                </div>
                <div className="item_dream_btn">
                  {roleUser === 0 ? (
                    <div className="btn_pay">
                      <span>Пополнить</span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="btn_update">
                    <span onClick={() => setActiveEditor(true)}>
                      Редактировать
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};
