export const donePost = async (
  backUrl: string,
  postId: number,
  boardDone: boolean
) => {
  try {
    const response = await fetch(`${backUrl}/api/check/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        boardDone: !boardDone,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status:${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
