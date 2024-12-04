import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import DynamicHead from '@/components/shared/DynamicHead';

const Home: React.FC<PageProps> = ({ lang }) => {
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  return <div className="bg-bgImg min-h-screen object-cover bg-no-repeat min-w-screen"></div>;
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
