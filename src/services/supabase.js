import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://incogpgzbhyjkwqaioof.supabase.co";

// ok to expose, row level policy is turned on
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluY29ncGd6Ymh5amt3cWFpb29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxMjg0MTMsImV4cCI6MjAzNDcwNDQxM30.6RFYDe87T_931C3WChvAR2jevXBgqGgIXOt1YHmX2eg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
