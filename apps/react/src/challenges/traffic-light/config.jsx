const config = {
  red: {
    id: 1,
    duration: 5000,
    next: 'green',
  },
  yellow: {
    id: 2,
    duration: 2000,
    next: 'red',
  },
  green: {
    id: 3,
    duration: 3000,
    next: 'yellow',
  },
};

export default config;
