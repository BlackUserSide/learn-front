import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../../../../api/users";
import { HeaderBlack } from "../../../Section/HeaderBlack";
import { DreamerCabinet } from "./DreamerCabinet/DreamerCabinet";
import { InvestorCabinet } from "./IvestorCabinet/InvestorCabinet";

export const HomeCabinet: React.FC = () => {
  const [dataUser, setDataUser] = useState<any>(null);
  useEffect(() => {
    getUser()
      .then((res) => {
        switch (res.status) {
          case 200:
            console.log(res);

            setDataUser(res.data);
            break;
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {dataUser ? (
        <div className="home-cabinet">
          <HeaderBlack />
          {dataUser.role === 0 ? (
            <DreamerCabinet content={dataUser} />
          ) : (
            <InvestorCabinet content={dataUser} />
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
