export type MetaData = {
  title: string;
  description: string;
  srcImg: string;
};

export type Galery = {
  title: string;
  listPhotos: { prev: string; full: string }[];
};

export type Contacts = {
  title: string;
  listContacts: { id: string; title: string; description: string }[];
  descriptionContact: string;
};
export type HomePage = {
  metaData: MetaData;
  title: string;
  aboutFactory: {
    title: string;
    image: string;
    paragraphs: string[];
  };
  gallery: Galery;
  ourClients: string;
  contacts: Contacts;
};

export type Translations = {
  locale: string;
  menu: { name: string; href: string }[];
  homePage: HomePage;
  ourClients: { title: string };
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
