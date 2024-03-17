export interface Tour {
    id: number;
    destination: string;
    departureDate: string;
    returnDate: string;
    adultPrice: number;
    childPrice: number;
    length: number;
    promoted: boolean;
    availableSeats: number;
  }