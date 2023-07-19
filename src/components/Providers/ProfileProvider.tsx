import React, { createContext, useEffect, useState } from "react";
import { getProfile, ApiSuccessResponse } from "api/services/Profile";
export const ProfileContext = React.createContext({});

export default function ProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [profile, setProfile] = useState<ApiSuccessResponse | null>(null);
  async function getAndSetProfile() {
    const response = await getProfile();
    setProfile(response.profile);
  }
  useEffect(() => {
    getAndSetProfile();
  }, []);
  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
}
