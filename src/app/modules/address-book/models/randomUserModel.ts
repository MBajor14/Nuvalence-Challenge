export interface RandomUser {
  gender?: Gender,
  name: Name,
  location?: Location,
  email?: string,
  login?: Login,
  dob?: {
      date: string,
      age: number
  },
  registered?: {
      date: string,
      age: number
  },
  phone?: string,
  cell?: string,
  id?: {
      name: string,
      value: string
  },
  picture?: {
      large: string,
      medium: string,
      thumbnail: string
  },
  nat?: string
}

type Gender = "male" | "female";

interface Name {
  title: string,
  first: string,
  last: string
}

interface Location {
  street: {
      number: number,
      name: string
  },
  city: string,
  state: string,
  country: string,
  postcode: number,
  coordinates: {
      latitude: string,
      longitude: string
  },
  timezone: {
      offset: string,
      description: string
  }
}

interface Login {
  uuid: string,
  username: string,
  password: string,
  salt: string,
  md5: string,
  sha1: string,
  sha256: string
}
