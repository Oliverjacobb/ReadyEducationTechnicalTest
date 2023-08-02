export interface IUser {
    name: {
        first: string;
        last: string;
        title: string;
      };
      picture: {
        thumbnail: string;
      };
      location: {
        city: string;
      };
}