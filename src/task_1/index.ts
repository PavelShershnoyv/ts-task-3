/** Задача 1 - Сущность любой монетки
 * Опишите класс валюты
 * Он должен определять имя(name) валюты, String
 * Содержать количество(value) валюты, Number
 * Содержать количественный тип(unit), в котором исчисляется валюта, String
 * Класс должен предоставлять информацию о типе валюты: Материальная, криптовалюта или металл-депозит
 * Example new Currency("DOGE", 12.5, "satoshi")
 */

export class Currency{
  private readonly _name: string;
  private _value: number;
  private readonly _unit: string;
  private _type: CurrencyType;


  public get name() {
    return this._name;
  }

  public get value() {
    return this._value;
  }

  public get unit() {
    return this._unit;
  }

  public get type() {
    return this._type;
  }

  public set value(n: number) {
    if (n < 0) {
      throw new Error();
    }

    this._value = n
  }

  constructor(name: string, value: number, unit: string){
    if (name === '' || name === undefined || value < 0 
    || value === undefined || unit === undefined){
      throw new Error();
    }

    this._name = name;
    this._value = value;
    this._unit = unit;
  }
}

export enum CurrencyType {
  "Dollar" = "Material",
  "Ruble" = "Material",
  "ru" = "Material",
  "XRP" = "Crypt",
  "Etherium" = "Crypt",
  "Gold" = "Metal",
  "alpha" = "Crypt",
  "materialCurrency" = "materialCurrency"
}
