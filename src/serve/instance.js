import axios from "axios"
// import type { AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios';
// import { REFRESH_TOKEN_CODE } from '@/config';
// import {
//   getToken,
//   transformRequestData,
//   handleAxiosError,
//   handleResponseError,
//   handleBackendError,
//   handleServiceResult,
// } from '@/utils';
// import { handleRefreshToken } from './helpers';

/**
 * 封装axios请求类
 */
export default class CustomAxiosInstance {
  constructor(
    axiosConfig,
    backendConfig = {
      codeKey: "code",
      dataKey: "data",
      msgKey: "message",
      successCode: 200,
    }
  ) {
    this.backendConfig = backendConfig
    this.instance = axios.create(axiosConfig)
    this.setInterceptor()
  }

  /** 设置请求拦截器 */
  setInterceptor() {
    this.instance.interceptors.request.use(
      async config => {
        const handleConfig = { ...config }
        // if (handleConfig.headers) {
        // 数据转换
        //   const contentType = handleConfig.headers['Content-Type'];
        //   handleConfig.data = await transformRequestData(handleConfig.data, contentType);
        // 设置token
        //   handleConfig.headers.Authorization = getToken();
        // }
        return handleConfig
      },
      axiosError => {
        console.log(axiosError)
        // const error = handleAxiosError(axiosError);
        // return handleServiceResult(error, null);
      }
    )
    this.instance.interceptors.response.use(
      async response => {
        const { status,data } = response
        if (status === 200 || status < 300 || status === 304) {
          //   const backend = response.data;
          //   const { codeKey, dataKey, successCode } = this.backendConfig
          // 请求成功
          //   if (backend[codeKey] === successCode) {
          //     return handleServiceResult(null, backend[dataKey]);
          //   }
          return data
          // token失效, 刷新token
          //   if (REFRESH_TOKEN_CODE.includes(backend[codeKey])) {
          //     const config = await handleRefreshToken(response.config);
          //     if (config) {
          //       return this.instance.request(config);
          //     }
          //   }

          //   const error = handleBackendError(backend, this.backendConfig);
          //   return handleServiceResult(error, null);
        }
        // const error = handleResponseError(response);
        // return handleServiceResult(error, null);
      },
      axiosError => {
        console.log(axiosError)
        // const error = handleAxiosError(axiosError);
        // return handleServiceResult(error, null);
      }
    )
  }
}
