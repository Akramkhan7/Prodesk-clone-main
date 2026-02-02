import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kihwehbsdzjnaxfuvxku.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpaHdlaGJzZHpqbmF4ZnV2eGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMTM0MDAsImV4cCI6MjA4NTU4OTQwMH0.65QhCGLhPDL9m0WOVtghVPsP1_QbLWeJl4_7WFn_4Pk'

export const supabase = createClient(supabaseUrl, supabaseKey)