import {
    GET_USER,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from "../const";
import axios from "axios";
export const Registre =
  (formData) => async (dispatch) => {
    dispatch({ type: REGISTER_USER });
    try {
      const { data } = await axios.post(
        "/auth/register",
        formData
      );
      localStorage.setItem('token',data.token)
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      error.response.data.forEach((err) =>
      alert(err.msg)
    );
     
      dispatch({
        type: REGISTER_USER_FAIL,
      });
    }
  };


  export const Login =(formData)=>async (dispatch) => {
      dispatch({
          type:LOGIN
      })
      try {
          const {data}=await axios.post('/auth/login',formData)
          console.log(data);
localStorage.setItem('token',data.token)
dispatch({
    type:LOGIN_SUCCESS,
    payload:data
})
      } catch (error) {
        error.response.data.forEach((err) =>
        alert(err.msg)
      )
         dispatch({
             type:LOGIN_FAIL
         }) 
      }
  }
  
export const GetAuth=() =>async(dispatch) => {
    const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
    dispatch({
        type:GET_USER
    })
    try {
        const {data}= await axios.get('/auth/isAuth',config)
        console.log("getAuth",data);
        dispatch({
            type:GET_USER_SUCCESS,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type:GET_USER_FAIL,
            payload:error.response.data
        })
    }
}


export const logout=()=>async dispatch=>{
  localStorage.removeItem('token')
  dispatch({
    type:LOGOUT
  })
}