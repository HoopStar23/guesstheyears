import { supabase } from "./supabase.js";

export async function getLeaderBoard() {
  return [
    { id: 1, name: "Jugador1", score: 100 },
    { id: 2, name: "Jugador2", score: 90 },
  ];
}

export const getEvents = async(targetYear) => {
    const{ data, error } = await supabase
    .rpc('get_random_events', { target_year: targetYear});

    if ( error )throw error;
    return data;
}