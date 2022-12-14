import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root[data-seed] {
    color-scheme: light dark;
  }

  :root[data-seed] {
    --title-xxl: 56px;
    --title-xl: 48px;
    --title-l: 36px;
    --title-m: 32px;
    --title-s: 24px;
    --text-xxl: 20px;
    --text-xl: 18px;
    --text-l: 16px;
    --text-m: 14px;
    --text-s: 12px;
    --static-white: #FFF;
    --static-grey50: #F9FAFB;
    --static-grey100: #F2F4F6;
    --static-grey200: #E5E8EB;
    --static-grey300: #D1D6DB;
    --static-grey400: #B0B8C1;
    --static-grey500: #8B95A1;
    --static-grey600: #6B7684;
    --static-grey700: #4E5968;
    --static-grey800: #333D4B;
    --static-grey900: #191F28;
    --core-green: #34A853;
    --core-yellow: #FBBC04;
    --core-red: #EA4335;
    --core-blue: #4285F4;
    --font-weight-bold: 700;
    --font-weight-medium: 500;
    --font-weight---regular: 400;
    --window-size-desktop: 1024px;
    --window-size-tablet: 768px;
    --window-size-mobile: 480px;
    --window-size-mobile-small: 320px;
    --title-font-weight: var(--font-weight-bold);
    --text-font-weight: var(--font-weight-medium);
    --quote-font-weight: var(--font-weight---regular);
  }
  :root[data-seed][data-seed-theme=light]{
    --background: var(--static-white);
    --white: #FFF;
    --grey50: #F9FAFB;
    --grey100: #F2F4F6;
    --grey200: #E5E8EB;
    --grey300: #D1D6DB;
    --grey400: #B0B8C1;
    --grey500: #8B95A1;
    --grey600: #6B7684;
    --grey700: #4E5968;
    --grey800: #333D4B;
    --grey900: #191F28;
    --green100: #E8F5E9;
    --green200: #C8E6C9;
    --green300: #A5D6A7;
    --green400: #81C784;
    --green500: #66BB6A;
    --green600: #4CAF50;
    --green700: #388e3b;
    --green800: #2e7d31;
    --green900: #1b5e20;
    --yellow100: #FFF8E1;
    --yellow200: #FFECB3;
    --yellow300: #FFE082;
    --yellow400: #FFD54F;
    --yellow500: #FFCA28;
    --yellow600: #ffb300;
    --yellow700: #ffa000;
    --yellow800: #ff8f00;
    --yellow900: #ff6f00;
    --red100: #FFEBEE;
    --red200: #FFCDD2;
    --red300: #EF9A9A;
    --red400: #E57373;
    --red500: #EF5350;
    --red600: #F44336;
    --red700: #e53935;
    --red800: #d32f2f;
    --red900: #b71c1c;
    --orange100: #FFF3E0;
    --orange200: #FFE0B2;
    --orange300: #FFCC80;
    --orange400: #FFB74D;
    --orange500: #FFA726;
    --orange600: #FF9800;
    --orange700: #FB8C00;
    --orange800: #F57C00;
    --orange900: #FF740F;
    --blue100: #E3F2FD;
    --blue200: #BBDEFB;
    --blue300: #90CAF9;
    --blue400: #64B5F6;
    --blue500: #42A5F5;
    --blue600: #2196F3;
    --blue700: #1e88e5;
    --blue800: #1976d2;
    --blue900: #1565c0;
    --box-shadow100: 0 0.8px 2px rgba(0,0,0,0.03), 0 3px 7px rgba(0,0,0,0.05), 0 12px 30px rgba(0,0,0,0.1);
  }
  :root[data-seed][data-seed-theme=dark]{
    --background: #202124;
    --white: #191F28;
    --grey50: #333D4B;
    --grey100: #4E5968;
    --grey200: #6B7684;
    --grey300: #8B95A1;
    --grey400: #B0B8C1;
    --grey500: #D1D6DB;
    --grey600: #E5E8EB;
    --grey700: #F2F4F6;
    --grey800: #F9FAFB;
    --grey900: #FFF;
    --green100: #1B5E20;
    --green200: #2E7D31;
    --green300: #388E3B;
    --green400: #4CAF50;
    --green500: #66BB6A;
    --green600: #81C784;
    --green700: #A5D6A7;
    --green800: #C8E6C9;
    --green900: #E8F5E9;
    --yellow100: #FF6F00;
    --yellow200: #FF8F00;
    --yellow300: #FFA000;
    --yellow400: #FFB300;
    --yellow500: #FFCA28;
    --yellow600: #FFD54F;
    --yellow700: #FFE082;
    --yellow800: #FFECB3;
    --yellow900: #FFF8E1;
    --red100: #B71C1C;
    --red200: #D32F2F;
    --red300: #E53935;
    --red400: #F44336;
    --red500: #EF5350;
    --red600: #E57373;
    --red700: #EF9A9A;
    --red800: #FFCDD2;
    --red900: #FFEBEE;
    --orange100: #FF740F;
    --orange200: #F57C00;
    --orange300: #FB8C00;
    --orange400: #FF9800;
    --orange500: #FFA726;
    --orange600: #FFB74D;
    --orange700: #FFCC80;
    --orange800: #FFE0B2;
    --orange900: #FFF3E0;
    --blue100: #1565C0;
    --blue200: #1976D2;
    --blue300: #1E88E5;
    --blue400: #2196F3;
    --blue500: #42A5F5;
    --blue600: #64B5F6;
    --blue700: #90CAF9;
    --blue800: #BBDEFB;
    --blue900: #E3F2FD;
    --box-shadow100: 0 0.8px 2px rgba(0,0,0,0.03), 0 3px 7px rgba(0,0,0,0.05), 0 12px 30px rgba(0,0,0,0.1);
  }
  @font-face {
    font-family: 'Google Sans Display';
    src:
      local("Google Sans Display"),
      url('/fonts/GoogleSansDisplay-Regular.woff2') format('woff2'),
      url('/fonts/GoogleSansDisplay-Regular.woff') format('woff'),
      url('/fonts/GoogleSansDisplay-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: block;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }  @font-face {
    font-family: 'Google Sans Display';
    src:
      local("Google Sans Display"),
      url('/fonts/GoogleSansDisplay-Medium.woff2') format('woff2'),
      url('/fonts/GoogleSansDisplay-Medium.woff') format('woff'),
      url('/fonts/GoogleSansDisplay-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: block;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }  @font-face {
    font-family: 'Google Sans Display';
    src:
      local("Google Sans Display"),
      url('/fonts/GoogleSansDisplay-Bold.woff2') format('woff2'),
      url('/fonts/GoogleSansDisplay-Bold.woff') format('woff'),
      url('/fonts/GoogleSansDisplay-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: block;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src:
      local('Spoqa Han Sans Neo'),
      url('/fonts/SpoqaHanSansNeo-Thin.woff2') format('woff2'),
      url('/fonts/SpoqaHanSansNeo-Thin.woff') format('woff'), 
      url('/fonts/SpoqaHanSansNeo-Thin.ttf') format('truetype');
    font-weight: 100;
    font-display: block;
    unicode-range: U+AC00-U+D7A3;
  } @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src:local('Spoqa Han Sans Neo'),
    url('/fonts/SpoqaHanSansNeo-light.woff2') format('woff2'),
    url('/fonts/SpoqaHanSansNeo-light.woff') format('woff'),
    url('/fonts/SpoqaHanSansNeo-light.ttf') format('truetype');
    font-weight: 300;
    font-display: block;
    unicode-range: U+AC00-U+D7A3;

  }  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src:
      local('Spoqa Han Sans Neo'),
      url('/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
      url('/fonts/SpoqaHanSansNeo-Regular.woff') format('woff'),
      url('/fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: block;
    unicode-range: U+AC00-U+D7A3;
  } @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src:local('Spoqa Han Sans Neo'),
    url('/fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
    url('/fonts/SpoqaHanSansNeo-Medium.woff') format('woff'),
    url('/fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: block;
    unicode-range: U+AC00-U+D7A3;

  }  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src:local('Spoqa Han Sans Neo'),
    url('/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
    url('/fonts/SpoqaHanSansNeo-Bold.woff') format('woff'),
    url('/fonts/SpoqaHanSansNeo-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: block;
    unicode-range: U+AC00-U+D7A3;
  }
 
  * {
    margin: 0;
    word-break: keep-all;
    -webkit-tap-highlight-color: transparent;
    transition: color, background-color 0.3s ease-in-out;
    font-family: 'Google Sans Display','Spoqa Han Sans Neo', sans-serif;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    background: var(--background);
  }
  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
export default GlobalStyles;
