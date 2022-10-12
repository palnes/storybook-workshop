import React, { useEffect, useState } from 'react';
import { IconButton } from '@storybook/components';
import Moon from './Icons/Moon';
import Sun from './Icons/Sun';

const ToggleTheme = ({ api }) => {
  const [isDark, setDark] = useState(false);

  const updateMode = () => {
    setDark(!isDark);
  };

  useEffect(() => {
    const iframe = document.getElementById('storybook-preview-iframe');
    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow?.document;

    iframeDocument.documentElement.dataset.theme = isDark ? 'dark' : '';
    console.log(iframeDocument.documentElement);
  }, [isDark]);

  return (
    <IconButton
      key="theme-toggle"
      active={false}
      title={isDark ? 'Change to light theme' : 'Change to dark theme'}
      onClick={updateMode}
    >
      {isDark ? <Sun /> : <Moon />}
    </IconButton>
  );
};

export default ToggleTheme;
