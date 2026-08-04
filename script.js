const supabaseUrl = "https://hcscjoqebozfoeevfktl.supabase.co";
const supabaseKey = "sb_publishable_AIew0nkWkEFAXTmLES-uqw_WqO_3vww";

const client = supabase.createClient( supabaseUrl,supabaseKey);

document.getElementById("signupForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await db
    .from("Users")
    .insert([
      {
        email: email,
        password: password
      }
    ]);

  if (error) {
    console.error(error);
    alert("Something went wrong.");
  } else {
    alert("Registration successful!");
  }
});
