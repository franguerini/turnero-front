const ROUTES = {
  HOME: () => "/",
  DOCTORS: () => `/doctors`,
  LOGIN: () => `/login`,
  REGISTER: () => `/register`,
  HISTORY: () => "/historia",
  NEWAPPOINTMENT: name => `/new-appointment/${name}`
};

export default ROUTES;
