const ROUTES = {
  HOME: () => "/",
  DOCTORS: () => `/doctors`,
  LOGIN: () => `/login`,
  REGISTER: () => `/register`,
  NEWAPPOINTMENT: id => `/new-appointment/${id}`
};

export default ROUTES;
