import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdatingSettings, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings successfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isUpdatingSettings, updateSetting };
}
