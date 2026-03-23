import { useMutation, useQuery } from "@tanstack/react-query";
import type { BusinessInfo, MenuItem } from "../backend";
import { useActor } from "./useActor";

export function useGetMenu() {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["menu"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMenu();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetBusinessInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<BusinessInfo | null>({
    queryKey: ["businessInfo"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getBusinessInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(data.name, data.email, data.message);
    },
  });
}
