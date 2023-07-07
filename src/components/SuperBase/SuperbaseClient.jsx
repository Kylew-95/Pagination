import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";

export const supabase = createClient(
  process.env.REACT.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

function SuperbaseClient() {
  return <Auth supabaseClient={supabase} />
}

export default SuperbaseClient;
