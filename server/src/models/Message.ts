export class Message {
  constructor(
    public chatid: string,
    public message: {
      userid:string
      id: string;
      name: string;
      img: string;
      message: string;
    }[]
  ) {}
}
