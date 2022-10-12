import { initialize as mswInit, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
mswInit({
  onUnhandledRequest: ({ method, url }) => {
    if (url.pathname.startsWith('/fotoweb')) {
      console.error(`Unhandled ${method} request to ${url}.
        This exception has been only logged in the console, however, it's strongly recommended to resolve this error as you don't want unmocked data in Storybook stories.
        If you wish to mock an error response, please refer to this guide: https://mswjs.io/docs/recipes/mocking-error-responses
      `);
    }
  },
});

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Components'],
    },
  },
};
