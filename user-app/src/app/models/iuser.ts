export interface IUser {
        name: {
            first: string;
            last: string;
            title: string;
          };
          picture: {
            medium: string;
          };
          location: {
            street: {
                number: number;
                name: string;
            }
            city: string;
            state: string;
            country: string,
            postcode: string,
            coordinates: {
                latitude: string;
                longitude: string;
            },
            timezone: {
                offset: string;
                description: string;
            }
          };
          email: string;
          phone: string;
          cell: string;
}

export interface IGetUserResponse {
    results: IUser[];
}