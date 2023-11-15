import { createClient } from "@supabase/supabase-js";
import { log } from "console";
const SUPABASE_URL = "https://caeisppgctgkirttclay.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhZWlzcHBnY3Rna2lydHRjbGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNzc2NzYsImV4cCI6MjAxNDY1MzY3Nn0.6Rn7AinXRvM7vYBHin-x-DWRPgZiO1U-w6GwMH0cJhY";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
async function POST({ request }) {
  const formData = await request.formData();
  formData.get("code");
  formData.get("tanggal");
  formData.get("keterangan");
  formData.get("waktu_izin");
  formData.get("file");
  return new Response(JSON.stringify("berhasil"));
}
async function GET() {
  const { error, data } = await supabase.storage.from("bukti_izin").list();
  log(data);
  return new Response(JSON.stringify(data));
}
export {
  GET,
  POST
};
