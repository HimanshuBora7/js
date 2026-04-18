function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("post data fetch");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("fetched user data");
    }, 4000);
  });
}

async function getBlogData() {
  try {
    console.log("fetching blog data ");

    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commentData);
  } catch (error) {
    console.log("there is some error", error);
  }
}
getBlogData();
