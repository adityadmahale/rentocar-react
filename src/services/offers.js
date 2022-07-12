import http from "./httpService";

const offersAPIEndpoint = "/offers/";

export const getOffers = () => {
  return http.get(offersAPIEndpoint);
};

export const addOffer = (offer) => {
  return http.post(offersAPIEndpoint, {
    title: offer.title,
    description: offer.description,
  });
};

export const updateOffer = (id, offer) => {
  return http.put(`${offersAPIEndpoint}${id}`, {
    title: offer.title,
    description: offer.description,
  });
};

export const deleteOffer = (id) => {
  return http.delete(`${offersAPIEndpoint}${id}`);
};
