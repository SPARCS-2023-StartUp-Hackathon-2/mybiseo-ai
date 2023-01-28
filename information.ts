class Information {
  information: string;
  link: string;
  constructor(information: string, link: string) {
    this.information = information;
    this.link = link;
  }
  get_information() {
    return this.information;
  }
  get_link() {
    return this.link;
  }
}
