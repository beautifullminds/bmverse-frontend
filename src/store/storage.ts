class Storage {
  get(key: string, defaultValue: any = "") {
    let value = localStorage.getItem(key) || defaultValue;
    return value;
  }

  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  clearNetworkID() {
    this.remove("SELECTED_NETWORK");
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  removeAll() {
    localStorage.clear();
  }

  clearWallet() {
    this.remove("SELECTED_WALLET");
  }
}

const storage = new Storage();

export default storage;
