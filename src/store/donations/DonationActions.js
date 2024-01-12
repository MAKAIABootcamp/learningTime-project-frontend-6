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
  addDonation,
  deleteDonation as deleteDonationAction,
  setError,
  setDonations,
  updateDonation as updateDonationAction,
} from "./donationSlice";

const donationCollection = collection(firestore, "Donations");

export const getDonations = () => {
  return async (dispatch) => {
    try {
      const tempArr = [];
      const response = await getDocs(donationCollection);
      response.forEach((item) => {
        tempArr.push({ id: item.id, ...item.data() });
      });
      dispatch(setDonations(tempArr));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};

export const createDonation = (donation) => {
  return async (dispatch) => {
    try {
      let tempObject = { ...donation };
      const response = await addDoc(donationCollection, donation);
      console.log(response);
      tempObject.id = response.id;
      dispatch(addDonation(tempObject));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};

export const updateDonation = (donation) => {
  const documentRef = doc(donationCollection, donation.id);
  return async (dispatch) => {
    try {
      dispatch(updateDonationAction(donation));
      delete donation.id;
      await setDoc(documentRef, donation);
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};

export const deleteDonation = (id) => {
  const documentRef = doc(donationCollection, id);
  return async (dispatch) => {
    try {
      dispatch(deleteDonationAction(id));
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
