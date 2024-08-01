interface IRecyclingFacility {
  location: string;
  iframe: string;
  fee: boolean;
  name: string;
  description: string;
  typesOfWaste: string[];
  image: string;
  links: { [key: string]: string };
  startHour: Date;
  endHour: Date;
}
interface IPagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface IRecyclingFacilitiesResponse {
  data: IRecyclingFacility[];
  pagination: IPagination;
}

interface ISearchParams {
  name: string;
  location: string;
  typesOfWaste: string;
  page: number;
  limit: number;
}
