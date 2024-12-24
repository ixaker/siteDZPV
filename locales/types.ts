export type MetaData = {
  title: string;
  description: string;
  srcImg: string;
};

export type Galery = {
  title: string;
  listPhotos: { prev: string; full: string }[];
};

export type Table = {
  title: string;
  thead: { title: string; colSpan: number; rowSpan: number }[][];
  tbody: string[][];
};

export type RollersPage = {
  heading: string;
  infoCard: { title: string; description?: string; list?: { description: string }[]; image: string }[];
  gallery: Galery;
  contacts: Contacts;
  table: Table;
  productionCapabilities: {
    title: string;
    list: { title: string; count: number; unit: string }[];
  };
  characteristics: {
    heading: string;
    information: {
      title: string;
      titleCard: string;
      descriptionCard: { description: string }[];
      image: string;
    }[];
  };
  castIronRolls: {
    title: string;
    imageBlackTheme: string;
    imageWhiteTheme: string;
  };
  tableInformation: {
    title: string;
    image: string[];
  };
};

export type Contacts = {
  title: string;
  listContacts: { id: string; title: string; description: string }[];
  descriptionContact: string;
  ourLocation: string;
  buildRoute: string;
};
export type HomePage = {
  metaData: MetaData;
  title: string;
  aboutFactory: {
    title: string;
    image: string;
    paragraphs: string[];
  };
  productionCapabilities: {
    title: string;
    list: { title: string; count: number; unit: string }[];
  };
  gallery: Galery;
  ourClients: string;
  contacts: Contacts;
};

export type PageDefault = {
  heading: string;
  title: string;
  description: string;
  descriptionList?: string[];
  srcImg: string;
  infoCard: { title: string; description?: string; list?: { description: string }[]; image: string }[];
  gallery: Galery;
  contacts: Contacts;
};

export type Translations = {
  locale: string;
  menu: { name: string; href: string }[];
  homePage: HomePage;
  lyttyaMetaluPage: PageDefault;
  mehobrobka: PageDefault;
  rollersPage: RollersPage;
  footer: {
    description: string;
  };

  modalInfo: {
    title: string;
    descriptionBtn: string;
    limitation: string;
    filesSizeIsLarger: string;
    fileSizeIsLarger: string;
    inputTitle: string;
    submitBtn: string;
    dropFile: string;
    successfulSending: string;
    errorMessage: string;
    unknownError: string;
  };

  btnSend: string;
};
