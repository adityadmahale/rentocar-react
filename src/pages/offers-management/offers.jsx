import React, { useEffect, useState } from "react";
import Card from "./card";
import { getOffers } from "./service/offersService";
import {
  Grid,
  Container,
  Stack,
  Typography,
  styled,
  Button,
} from "@mui/material";
import Joi from "joi";
import { toast } from "react-toastify";
import Modal from "./modal";
import OfferForm from "./offerForm";
import NavBar from "../../components/common/nav-bar";

const StyledButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#00d2d3",
  padding: "15px",
  "&:active": {
    backgroundColor: "#00d2d3",
  },
  "&:hover": {
    backgroundColor: "#00d2d3",
  },
  "&:disabled": {
    border: "1px solid #999999",
    backgroundColor: "#cccccc",
    color: "#666666",
  },
});

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [applied, setApplied] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [offerFields, setOfferFields] = useState({
    title: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    title: Joi.string().required().label("Title"),
    description: Joi.string().required().label("Description"),
  });

  const validate = () => {
    const result = schema.validate(offerFields, { abortEarly: false });

    if (!result.error) {
      return null;
    }
    const allErrors = {};
    for (let item of result.error.details) {
      allErrors[item.path[0]] = item.message;
    }

    return allErrors;
  };

  const handleChange = ({ target: input }) => {
    const newOfferFields = { ...offerFields };
    newOfferFields[input.name] = input.value;
    setOfferFields(newOfferFields);
  };

  const handleOfferPost = (e) => {
    e.preventDefault();
    const allErrors = validate();
    setErrors(allErrors || {});
    if (allErrors) {
      return;
    }
    const updatedOffer = {
      ...offerFields,
      id: offers.length + 1,
      image: "/offer.jpg",
    };
    const newOffers = [updatedOffer, ...offers];
    setOffers(newOffers);
    handleClose();
    toast.success("Offer Added Successfully");
    setOfferFields({
      title: "",
      description: "",
    });
  };

  const handleSelect = (selected) => {
    setSelectedOffer({ ...selected });
  };

  const handleDelete = () => {
    const newOffers = offers.filter((offer) => offer.id !== selectedOffer.id);
    setOffers(newOffers);
    setSelectedOffer(null);
  };

  const handleApply = () => {
    toast.success("Offer Applied");
    setApplied(true);
  };

  useEffect(() => {
    setOffers(getOffers());
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <Container
        sx={{
          marginTop: "30px",
          paddingTop: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          paddingBottom: "20px",
          border: "1px solid #00d2d3",
        }}
      >
        <Modal onClose={handleClose} open={open}>
          <OfferForm
            offerFields={offerFields}
            onChange={handleChange}
            onOfferPost={handleOfferPost}
            errors={errors}
            selectedOffer={selectedOffer}
          />
        </Modal>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          marginBottom="20px"
          justifyContent="space-between"
          padding="0px 15px 0px 15px"
        >
          <Typography variant="h4" component="h4" textAlign="left">
            Offers
          </Typography>

          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            <StyledButton
              onClick={handleDelete}
              disabled={selectedOffer === null}
              variant="outlined"
            >
              DELETE OFFER
            </StyledButton>
            <StyledButton onClick={handleOpen} variant="outlined">
              ADD OFFER
            </StyledButton>
          </Stack>
        </Stack>
        <Grid container spacing={3}>
          {offers.map((offer) => (
            <Grid
              item
              xs={12}
              md={4}
              style={{ cursor: "pointer" }}
              key={offer.id}
            >
              <Card
                key={offer.id}
                offer={offer}
                selectedOffer={selectedOffer}
                onSelect={handleSelect}
                onApply={handleApply}
                applied={applied}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Offers;
