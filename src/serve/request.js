// import { ref } from 'vue';
// import { useLoading, useBoolean } from '@/hooks';
import CustomAxiosInstance from "./instance"

/**
 * 创建请求
 */
export function createRequest(axiosConfig, backendConfig) {
  const customInstance = new CustomAxiosInstance(axiosConfig, backendConfig)

  /**
   * 异步promise请求
   * @param param - 请求参数
   * - url: 请求地址
   * - method: 请求方法(默认get)
   * - data: 请求的body的data
   * - axiosConfig: axios配置
   */
  async function asyncRequest(param) {
    const { url } = param
    const method = param.method || "get"
    const { instance } = customInstance
    const res = await getRequestResponse(instance, method, url, param.data, param.axiosConfig)

    return res
  }

  /**
   * get请求
   * @param url - 请求地址
   * @param config - axios配置
   */
  function get(url, config) {
    return asyncRequest({ url, method: "get", axiosConfig: config })
  }

  /**
   * post请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  function post(url, data, config) {
    return asyncRequest({ url, method: "post", data, axiosConfig: config })
  }
  /**
   * put请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  function put(url, data, config) {
    return asyncRequest({ url, method: "put", data, axiosConfig: config })
  }

  /**
   * delete请求
   * @param url - 请求地址
   * @param config - axios配置
   */
  function handleDelete(url, config) {
    return asyncRequest({ url, method: "delete", axiosConfig: config })
  }

  return {
    get,
    post,
    put,
    delete: handleDelete,
  }
}

async function getRequestResponse(instance, method, url, data, config) {
  let res
  if (method === "get" || method === "delete") {
    res = await instance[method](url, config)
  } else {
    res = await instance[method](url, data, config)
  }
  return res
}
