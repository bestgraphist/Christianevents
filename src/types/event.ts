export interface Speaker {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  speaker: string;
  description?: string;
}

export interface Accommodation {
  description: string;
  options: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  category: string;
  categoryKey: string;
  price: string;
  organizer: string;
  speakers?: Speaker[];
  schedule?: ScheduleItem[];
  accommodations?: Accommodation;
}