# Ukrainian Translations for React-admin

Ukrainian translations for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST services.


## Installation

```sh
npm install --save ra-language-ukrainian
```

## Usage

```js
import ukrainianMessages from 'ra-language-ukrainian';

const messages = {
    'ua': ukrainianMessages,
};

const i18nProvider = locale => messages[locale];

<Admin locale="ua" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](https://en.wikipedia.org/wiki/MIT_License).
