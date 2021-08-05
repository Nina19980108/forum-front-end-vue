import { apiHelper } from "./../utils/helpers"
const getToken = () => localStorage.getItem('token')
export default {
  getRestaurants({ queryPage, queryCategoryId }) {
    const searchParams = new URLSearchParams({ page: queryPage, categoryId: queryCategoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}