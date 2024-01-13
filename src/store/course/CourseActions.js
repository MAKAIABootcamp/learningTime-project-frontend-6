import { firestore } from "../../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import {
  addCourse,
  deleteCourse as deleteCourseAction,
  setError,
  setCourses,
  updateCourse as updateCourseAction,
} from "./courseSlice";

const courseCollection = collection(firestore, "courses");

export const getCourses = () => {
  return async (dispatch) => {
    try {
      const tempArr = [];
      const response = await getDocs(courseCollection);
      response.forEach((item) => {
        tempArr.push({ id: item.id, ...item.data() });
      });
      dispatch(setCourses(tempArr));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};

export const createCourse = (course) => {
  return async (dispatch) => {
    try {
      let tempObject = { ...course };
      const response = await addDoc(courseCollection, course);
      console.log(response);
      tempObject.id = response.id;
      dispatch(addCourse(tempObject));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};

export const updateCourse = (course) => {
  const documentRef = doc(courseCollection, course.id);
  return async (dispatch) => {
    try {
      dispatch(updateCourseAction(course));
      delete course.id;
      await setDoc(documentRef, course);
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};

export const deleteCourse = (id) => {
  const documentRef = doc(courseCollection, id);
  return async (dispatch) => {
    try {
      dispatch(deleteCourseAction(id));
      const response = await deleteDoc(documentRef);
      console.log(response);
    } catch (error) {
      console.log(error);
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};
