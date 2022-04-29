export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  poster: any;

  constructor(
    id: number,
    name: string,
    channel: string,
    seasons: number,
    description: string,
    webpage: string,
    poster: any,
  ) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.webpage = webpage;
    this.poster = poster;
  }
}
