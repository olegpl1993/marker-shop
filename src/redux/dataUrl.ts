const dataUrl = {
  setDataUrl: (name: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(name, value);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState({ path: newUrl }, "", newUrl);
  },

  getDataUrl: (name: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    const value = searchParams.get(name);
    return value;
  },
};

export default dataUrl;
export const { setDataUrl, getDataUrl } = dataUrl;
