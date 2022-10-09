import { ReactNode } from "react";

export const themeStorage = {
    setItem: (name: string, item: ReactNode) => {
        localStorage.setItem(name, JSON.stringify(item));
    },
    getItem: (name: string) => {
        const item = localStorage.getItem(name);
        if (item) {
            return JSON.parse(item);
        }
    },
    };