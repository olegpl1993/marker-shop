export const setDataUrl = (name: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  if (value === "" || value === "[]") searchParams.delete(name);
  else searchParams.set(name, value);
  const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
  window.history.replaceState({ path: newUrl }, "", newUrl);
};

export const getDataUrl = (name: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  const value = searchParams.get(name);
  return value;
};