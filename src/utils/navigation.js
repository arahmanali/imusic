import { history } from '../store';

export const navigateTo = path => {
  if (!path) {
    history.goBack();
  }
  history.push(path);
};

export const navigateToBack = () => {
  history.goBack();
};
