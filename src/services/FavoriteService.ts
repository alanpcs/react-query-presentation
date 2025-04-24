import { NamedUrl } from "./types";

type SavedItem = NamedUrl;

export const favoriteService = {
  getSavedItems: (): Promise<SavedItem[]> => {
    const items = JSON.parse(localStorage.getItem("savedItems") || "[]");
    return Promise.resolve(items);
  },

  addSavedItem: (item: SavedItem): Promise<void> => {
    const items: SavedItem[] = JSON.parse(localStorage.getItem("savedItems") || "[]");
    if (!items.find((i) => i.url === item.url)) items.push(item);
    localStorage.setItem("savedItems", JSON.stringify(items));
    return Promise.resolve();
  },

  removeSavedItem: (url: string): Promise<void> => {
    const items: SavedItem[] = JSON.parse(localStorage.getItem("savedItems") || "[]");
    const updated = items.filter((i) => i.url !== url);
    localStorage.setItem("savedItems", JSON.stringify(updated));
    return Promise.resolve();
  },
};
