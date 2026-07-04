import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nxlosawghotxvinyblto.supabase.co";

const supabaseKey =
  "sb_publishable_e_mwbkZ2zL1E6iX6e_9Bsw_PNC_i4fP";

export const supabase = createClient(supabaseUrl, supabaseKey);