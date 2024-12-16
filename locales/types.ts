export type Translations = {
  locale: string;
  menu: { name: string; href: string }[];
  homePage: { title: string };
  btnSend: string;
  aboutFactory: {
    title: string;
    image: string;
    paragraphs: string[];
  };
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
};
