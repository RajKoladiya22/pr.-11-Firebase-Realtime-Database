import firebase from "firebase/compat/app";
import { toast } from "react-toastify";
import { app } from "../../../firebase";
import { get, getDatabase, onValue, ref, set } from "firebase/database";

export const SET_DATA = (data) =>{
    return {
        type: 'setdata',
        payload: data
    }
}

export const GET_DATA = () => {
  return async (dispatch) => {
    try {
      let db = getDatabase(app);
      let data = (await get(ref(db, "data"))).val();    

      dispatch(SET_DATA(data))
    } catch (err) {
      toast.error(`Error ${err}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(err);
      return false;
    }
  };
};

export const ADD_DATA = (data) => {
  return async (dispatch) => {
    try {
      const db = getDatabase(app);
      await set(ref(db, `data/${data.id}`), data);
      toast.success("Data Added Successfully");
    } catch (err) {
      toast.error(`Error ${err}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(err);
      return false;
    }
  };
};
