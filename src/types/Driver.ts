export type Driver = {
  driver: {
    id: number;
    name: string;
    abbr: string;
    number: number;
    image: string;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  position: number;
  points: number;
  season: number;
};
