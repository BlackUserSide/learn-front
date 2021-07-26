import { request } from ".";
export interface Ires {
  data: any;
  status: number;
}
export const getDreamsById = async () => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/auth/login`,
    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};
