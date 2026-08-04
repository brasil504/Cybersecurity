const supabaseUrl = "https://hcscjoqebozfoeevfktl.supabase.co";
const supabaseKey = "sb_publishable_AIew0nkWkEFAXTmLES-uqw_WqO_3vww";

const client = supabase.createClient( supabaseUrl,supabaseKey);

async function signUp(email, password) {
  const { data, error } = await client.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    alert("Signup error: " + error.message);
    return;
  }

  // 🔥 Insert into your table AFTER signup
  const { error: insertError } = await client
    .from("users")
    .insert([
      {
        email: email,
        password: password
      }
    ]);

  if (insertError) {
    alert("Table insert error: " + insertError.message);
  } else {
    alert("Account created & saved!");
  }
}
