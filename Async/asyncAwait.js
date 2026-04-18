function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "alpha", url: "https://google.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("fetching user data");
    let userData = await fetchUserData();
    console.log("User data:", userData);
  } catch (error) {
    console.log("error", error);
  }
}

getUserData();
