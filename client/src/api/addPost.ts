export const addPostBackend = async (
  backUrl: string,
  boardTitle: string,
  boardPost: string
) => {
  try {
    const response = await fetch(`${backUrl}/api/addposts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ boardTitle, boardPost, boardDone: true }),
    });

    if (!response.ok) {
      console.error("Failed to add Post. Status:", response.status);
      throw new Error("Failed to add Post");
    }

    return await response.json();
  } catch (error) {
    console.error("Error", error);
  }
};
