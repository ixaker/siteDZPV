import { GetStaticPropsContext, GetStaticPropsResult, GetStaticPaths } from 'next';
import path from 'path';
import fs from 'fs';
import { HomePage, PageDefault, RollersPage, Translations } from '../../locales/types';

export const getDefaultLanguage = (langFromUrl?: string): string => {
  const defaultLanguage = 'en';

  return SUPPORTED_LANGUAGES.includes(langFromUrl || '') ? langFromUrl! : defaultLanguage;
};

// Определяем поддерживаемые языки динамически
const getSupportedLanguages = (): string[] => {
  const localesPath = path.join(process.cwd(), 'locales');
  const files = fs.readdirSync(localesPath);
  // получаем массив джейсонов с язіком
  const jsonFiles = files.filter((file) => path.extname(file) === '.json');

  return jsonFiles.map((file) => file.replace('.json', '')); // Убираем расширение
};

export const SUPPORTED_LANGUAGES = getSupportedLanguages();

// Загружает переводы из файловой системы
const loadTranslations = (lang: string): Translations => {
  const filePath = path.join(process.cwd(), 'locales', `${lang}.json`);

  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Translations;
  } else {
    console.warn(`Translations not found for language: ${lang}`);

    const defaultFilePath = path.join(process.cwd(), 'locales', `uk.json`);
    return JSON.parse(fs.readFileSync(defaultFilePath, 'utf-8')) as Translations;
  }
};
// Функция обёртка для getStaticProps
export const withStaticProps = async <P>(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<P>> => {
  const lang = (context.params?.lang as string) || 'uk';

  const translations = loadTranslations(lang);

  return {
    props: {
      translations,
      lang,
      supportedLanguages: SUPPORTED_LANGUAGES,
      defaultLanguage: getDefaultLanguage(),
      version: `?v=${new Date().getTime()}`,
    } as P,
  };
};

export type PageProps = {
  translations: Translations;
  lang: string;
  supportedLanguages: string[];
  defaultLanguage: string;
  version: string;
  children?: React.ReactNode;
};

export type HomeComponentProps = {
  translations: Translations;
  lang: string;
  supportedLanguages: string[];
  translationsPage: HomePage;
  version: string;
};

export type RollersPageProps = {
  translations: Translations;
  lang: string;
  supportedLanguages: string[];
  translationsPage: RollersPage;
  version: string;
};

export type DefaultPage = {
  translations: Translations;
  lang: string;
  supportedLanguages: string[];
  translationsPage: PageDefault;
  version: string;
};

// Функция для создания путей
export const withStaticPaths: GetStaticPaths = async () => {
  const paths = SUPPORTED_LANGUAGES.map((lang) => ({
    params: { lang },
  }));

  return {
    paths,
    fallback: false,
  };
};
