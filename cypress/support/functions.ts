export const getRandomOption = (options) => {
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    }
    return ''; 
  };