type User = {
  id: string;
  name: string;
  flags: {
    [key: string]: string[];
  };
};
