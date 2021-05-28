export class ArtspotModel {
  public id: number;

  constructor(
    public name: string,
    public image: string,
    public author: string,
    public createdAt: Date
  ){}
}
