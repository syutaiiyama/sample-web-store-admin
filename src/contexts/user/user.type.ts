export type TUser = {
  isAuthenticated: boolean;
  name: string;
  email: string;
  address: TAddress;
  card: TCreditCard;
};

export type TAddress = {
  postalCode: string;
  prefecture: string;
  city: string;
  addressLine: string;
  building: string;
  tel: string;
};

export type TCreditCard = {
  brand: string;
  last4: string;
  expYear: string;
  expMonth: string;
};
