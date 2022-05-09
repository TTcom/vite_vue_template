import { mockRequest } from "../serve/index"
export default {
  submitOrder(params) {
    return mockRequest.post("/good/list", params)
  },
  getGoodList(params) {
    return mockRequest.post("/submit/order", params)
  },
}
