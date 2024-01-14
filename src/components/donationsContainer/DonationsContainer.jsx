import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDonations } from "../../store/donations/DonationActions";
import CardDonation from "../cardDonation/CardDonation";
import "./DonationsContainer.scss";

const DonationsContainer = () => {
  const dispatch = useDispatch();
  const { donations } = useSelector((store) => store.donation);

  useEffect(() => {
    dispatch(getDonations());
  }, [dispatch]);

  return (
    <div className="donations-container">
      {donations.map((donation) => (
        <CardDonation key={donation.id} {...donation} />
      ))}
    </div>
  );
};

export default DonationsContainer;
