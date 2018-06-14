import dev from './development.config';
import prod from './production.config';

export default {
  development: { ...dev },
  production: { ...prod },
};
