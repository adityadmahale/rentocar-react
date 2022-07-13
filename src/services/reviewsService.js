import http from "./httpService";

const reviewsAPIEndpoint = "/reviews/";

export const getReviews = () => {
  return http.get(reviewsAPIEndpoint);
};

export const addReview = (review) => {
  return http.post(reviewsAPIEndpoint, {
    rating: review.rating,
    title: review.title,
    description: review.description,
    user: review.user,
    vehicle: review.vehicle,
  });
};

export const updateReview = (id, liked) => {
  return http.put(`${reviewsAPIEndpoint}${id}`, {
    liked,
  });
};

export const deleteReview = (id) => {
  return http.delete(`${reviewsAPIEndpoint}${id}`);
};
