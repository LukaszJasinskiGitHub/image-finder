const apiUrl: string = process.env.REACT_APP_AUTH_URL as string;

const routes = {
IMAGE: (topic = ''): string => `photos/random?query=${topic}&client_id=${process.env.REACT_APP_ACCESS_KEY_API}`,
};

export { routes };
export default apiUrl;