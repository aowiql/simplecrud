export const putPostBackend = async (
  backUrl: string,
  postId: number,
  boardPost: string,
  boardTitle: string
) => {
  try {
    const response = await fetch(`${backUrl}/api/change/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        boardTitle: boardTitle,
        boardPost: boardPost,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status:${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error", error);
  }
};
