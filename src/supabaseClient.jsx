import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dzihfinnjxfrwaxuqoiw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6aWhmaW5uanhmcndheHVxb2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNDA4MjIsImV4cCI6MjAyMjgxNjgyMn0.S_hRRF31csqx-PueWzm4F-G0b719b3G8sESFJmnj9BM"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)