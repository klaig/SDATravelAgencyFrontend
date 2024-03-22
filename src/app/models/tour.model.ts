export interface Tour {
    id: number;
    destination: string;
    departureDate: string;
    length: number;
    returnDate: string;
    adultPrice: number;
    childPrice: number;
    promoted: boolean;
    availableSeats: number;
  }