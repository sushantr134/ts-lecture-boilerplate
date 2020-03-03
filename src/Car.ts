export default class Car {
  private name: string;
  private model: string;
  private regNo: number;

  constructor(regno: number) {
    this.regNo = regno;
    this.name = "";
    this.model = "";
  }

  public setName = (carname: string): Car => {
    this.name = carname;
    return this;
  };

  public setModel = (carmodel: string): Car => {
    this.model = carmodel;
    return this;
  };

  public getName = (): string => {
    return this.name;
  };

  public getModel = (): string => {
    return this.model;
  };

  public getRegno = (): number => {
    return this.regNo;
  };
}
