import { request } from ".";
export interface Ires {
  data: any;
  status: number;
}
export const loginUser = async (data: any) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/auth/login`,
    data: {
      email: data.email,
      password: data.password,
    },
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
export const registerUsers = async (data: any) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/auth/reg`,
    data: {
      email: data.email,
      password: data.password,
      role: data.role,
      firstName: data.firstName,
      lastName: data.lastName,
      status: 0,
      procent: 0,
      photo: "",
    },
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

export const getUser = async () => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "GET",
    url: `/user/get_user`,
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
