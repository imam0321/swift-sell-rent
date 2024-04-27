import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {
  // TODO
  const {logOut} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(res => {
      return res;
    }), error => {
      if(error.response.status === 401 || error.response.status === 403){
        logOut()
        .then(()=> {
          navigate('/logIn')
        })
        .catch(error => console.log(error))
      }
    }
  },[])
  return axiosSecure;
};

export default useAxiosSecure;