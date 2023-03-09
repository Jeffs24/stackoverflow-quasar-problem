import { render as testingLibraryRender } from '@testing-library/vue';
import router from '@/router';
import i18n from '@/i18n';
import { Notify, Quasar } from 'quasar';

const quasarOptions = {
  plugins: { Notify },
};

const render = (component, options) => {
  return testingLibraryRender(component, {
    ...options,
    global: {
      plugins: [router, i18n, [Quasar, quasarOptions]],
    },
  });
};

export default render;
