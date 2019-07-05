import idGenerator from "react-id-generator";

export default class CoffeService {
  _apiBase = `http://localhost:3000`;

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }
    return await res.json();
  };

  getBestsellersItems = async () => {
    const res = await this.getResource(`/bestsellers/`);
    return res.map(this._transformItem);
  };
  getCoffeItems = async () => {
    const res = await this.getResource(`/coffee/`);
    return res.map(this._transformItem);
  };
  getGoodsItems = async () => {
    const res = await this.getResource(`/goods/`);
    return res.map(this._transformItem);
  };

  _transformItem = data => {
    data["id"] = idGenerator();
    return { ...data };
  };
}
