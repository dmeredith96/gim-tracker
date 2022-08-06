import { Player } from "oldschooljs/dist/meta/types";

export const getUserHiscores = async (username: string): Promise<Player> => {
  const response = await fetch(
    "/api/player/get_player_hiscores?name=" + username
  );
  return await response.json();
};

export const getAllPlayerHiscoresFromGroup = async (): Promise<Player[]> => {
  const response = await fetch(
    "/api/player/get_all_player_hiscores_from_group"
  );
  return await response.json();
};
