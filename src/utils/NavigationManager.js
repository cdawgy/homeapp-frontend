function navigateToPage(nav, route) {
  const navigationPath = `/${route}`;
  nav(navigationPath);
}

export default navigateToPage;
