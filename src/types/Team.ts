export type Team = {
  position: number;
  points: number;
  season: number;
  team: {
    id: string;
    name: string;
    logo: string;
  };
};
