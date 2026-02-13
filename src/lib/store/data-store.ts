"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ProfileData {
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  tagline: string;
  taglineEn: string;
  email: string;
  github: string;
  wechat: string;
}

interface DataState {
  profile: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => void;
  resetProfile: () => void;
}

const defaultProfile: ProfileData = {
  name: "Holly Chi",
  nameEn: "Holly Chi",
  title: "AI产品经理",
  titleEn: "AI Product Manager",
  tagline: "搞点实际的能用的",
  taglineEn: "Building practical, usable products",
  email: "your.email@example.com",
  github: "https://github.com/WinterChenS",
  wechat: "WinterChen",
};

export const useDataStore = create<DataState>()(
  persist(
    (set) => ({
      profile: defaultProfile,
      updateProfile: (data) =>
        set((state) => ({
          profile: { ...state.profile, ...data },
        })),
      resetProfile: () => set({ profile: defaultProfile }),
    }),
    {
      name: "profile-storage",
    }
  )
);
